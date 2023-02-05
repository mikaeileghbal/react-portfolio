import React, { useEffect, useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import { useParams } from "react-router";
import styled from "styled-components";

import { Carousel, Footer, Next, Previous } from "../components";
import { portfolio } from "../data/portfolio";
import {
  Container,
  CustomLink,
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

const ButtonWrap = styled.div`
  margin-top: 1.5em;
  margin-bottom: 1em;
`;

const Divider = styled.hr`
  display: block;
  height: 1px;
  width: 50%;
  background-color: #484848;
  position: relative;
  border: 0;
  margin: 0.5em 0 1em;
`;

const CustomLinkProject = styled(CustomLink)`
  //font-size: 18px;
  font-weight: 700;
  color: ${colors.greenText};

  &:hover {
    color: ${colors.greenText};
  }
`;

export default function Project() {
  const [project, setProject] = useState({});
  const { title } = useParams();
  //const images = ["githubuser-1.png", "githubuser-2.png", "calendar.png"];

  useEffect(() => {
    setProject(
      portfolio.filter((item) => item.title === title.replace(/-/g, " "))[0]
    );
  }, [title]);

  console.log("project ", project);
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
              items={project.images}
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
            {project.tech?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </UList>
        </TextGroup>
        <SectionSubTitle>Resources</SectionSubTitle>
        <Divider />
        <UList>
          <li>
            The project is online at
            <Space>
              <CustomLinkProject href={project.resource?.[0]} target="_blank">
                {project.resource?.[0].toUpperCase()}
              </CustomLinkProject>
            </Space>
          </li>
          <li>
            Access the project's source on
            <Space>
              <CustomLinkProject href={project.resource?.[1]} target="_blank">
                GITHUB
              </CustomLinkProject>
            </Space>
          </li>
        </UList>
        <Next to="/portfolio/music-store" show={true}>
          music store
        </Next>
        <Previous to="/portfolio" show={true}>
          portfolio
        </Previous>
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
