import React, { useEffect, useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import { useParams } from "react-router";
import styled from "styled-components";

import { Carousel, Footer, Next, Previous } from "../components";
import { portfolio } from "../data/portfolio";
import {
  ButtonWrap,
  Container,
  CustomLink,
  Divider,
  PortoButton,
  Section,
  SectionSubTitle,
  SectionTitle,
  Space,
  StyledButton,
  Text,
  TextGroup,
  UList,
} from "../styles/global";
import theme from "../styles/theme";

const { colors } = theme;

const CustomLinkProject = styled(CustomLink)`
  //font-size: 18px;
  font-weight: 700;
  color: ${colors.greenText};

  &:hover {
    color: ${colors.greenText};
  }

  @media screen and (max-width: ${theme.breakPoints.lg}px) {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

export default function Project() {
  const [project, setProject] = useState({});
  const { title } = useParams();

  useEffect(() => {
    const current = portfolio.filter(
      (item) => item.title === title.replace(/-/g, " ")
    )[0];

    setProject(current);
  }, [title]);

  return (
    <Section>
      <Container>
        <SectionTitle>{project.title}</SectionTitle>
        <Text>{project.brief}</Text>
        <ButtonWrap>
          <StyledButton
            textColor="white"
            backColor={theme.colors.green}
            style={{ padding: "0.8em 1.5em" }}
            disabled
          >
            <GoLinkExternal size={22} />
            <span>visit the website</span>
          </StyledButton>
        </ButtonWrap>
        <div
          style={{
            backgroundColor: "white",
            margin: "2em 0 3em",
            boxShadow:
              "8px 10px 0px rgba(2, 12, 27, 0.4), inset 8px 10px 10px rgba(2, 12, 27, 0.4)",
          }}
        >
          {project.images && (
            <Carousel
              items={project.images.slice(2)}
              render={render}
              groupSize={1}
              header="project snapshots"
            />
          )}
        </div>
        <SectionSubTitle>About this project</SectionSubTitle>
        <Divider />
        <TextGroup>
          {project.description?.map((text, i) => (
            <Text key={i}>{text}</Text>
          ))}
        </TextGroup>
        <SectionSubTitle>Technical Sheet</SectionSubTitle>
        <Text>
          Code technologies I got involved with while working on this project.
        </Text>
        <Divider />
        <TextGroup>
          <UList>
            {project.tech?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </UList>
        </TextGroup>
        <SectionSubTitle>Resources</SectionSubTitle>
        <Divider />
        <UList>
          {project.resource?.[0] !== "undefined" ? (
            <li>
              <div>
                <span>The project is online at</span>
                <Space>
                  <CustomLinkProject
                    href={project.resource?.[0]}
                    target="_blank"
                  >
                    {project.resource?.[0].toUpperCase()}
                  </CustomLinkProject>
                </Space>
              </div>
            </li>
          ) : null}
          <li>
            <div>
              <span>Access the project's source on</span>
              <Space>
                <CustomLinkProject href={project.resource?.[1]} target="_blank">
                  GITHUB
                </CustomLinkProject>
              </Space>
            </div>
          </li>
        </UList>
        {project.id < portfolio.length && (
          <Next
            to={`/portfolio/${portfolio[project.id]?.title.replace(
              /\s/g,
              "-"
            )}`}
            show={true}
          >
            {portfolio[project.id]?.title}
          </Next>
        )}

        {project.id > 1 ? (
          <Previous
            to={`/portfolio/${portfolio[project.id - 2]?.title.replace(
              /\s/g,
              "-"
            )}`}
            show={true}
          >
            {portfolio[project.id - 2]?.title}
          </Previous>
        ) : (
          <Previous to="/portfolio" show={true}>
            portfolio
          </Previous>
        )}

        <PortoButton href="/portfolio" title="Back to portfolio">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </PortoButton>
        <Footer />
      </Container>
    </Section>
  );
}

function render(item) {
  return (
    <div>
      <img src={`/images/${item}`} alt="item" />
    </div>
  );
}
