import React, { useEffect, useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import { useParams } from "react-router";
import styled from "styled-components";

import { Carousel, Footer } from "../components";
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
  const images = ["githubuser-1.png", "githubuser-2.png", "calendar.png"];

  useEffect(() => {
    setProject(
      portfolio.filter((item) => item.title === title.replace(/-/g, " "))[0]
    );
  }, [title]);

  return (
    <Section>
      <Container>
        <SectionTitle>{project.title}</SectionTitle>
        <Text>
          From Html, CSS and Web Components to React.JS, Next.JS, Redux,
          Suztand, React Qury, MongoDB and MySQL. Check out my latest web
          software development portfolio projects.
        </Text>
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
          <Carousel
            items={images}
            render={render}
            groupSize={1}
            header="project snapshots"
          />
        </div>
        <SectionSubTitle>About this project</SectionSubTitle>
        <Divider />
        <TextGroup>
          <Text>
            From Html, CSS and Web Components to React.JS, Next.JS, Redux,
            Suztand, React Qury, MongoDB and MySQL. Check out my latest web
            software development portfolio projects. From Html, CSS and Web
            Components to React.JS, Next.JS, Redux, Suztand, React Qury, MongoDB
            and MySQL. Check out my latest web software development portfolio
            projects.
          </Text>
          <Text style={{ marginTop: "1em" }}>
            From Html, CSS and Web Components to React.JS, Next.JS, Redux,
            Suztand, React Qury, MongoDB and MySQL. Check out my latest web
            software development portfolio projects.
          </Text>
        </TextGroup>
        <SectionSubTitle>Technical Sheet</SectionSubTitle>
        <Text>
          Code technologies I got involved with while working on this project.
        </Text>
        <Divider />
        <TextGroup>
          <UList>
            <li>UI/UX Design UI/UX Architecture</li>
            <li>UI/UX Animations</li>
            <li>HTML5 – semantic, audio, video, canvas</li>
            <li>CSS3 – preprocessed with LESS + LESSHAT</li>
            <li>Meteor.js</li>
            <li>Blaze</li>
            <li>MongoDB</li>
          </UList>
        </TextGroup>
        <SectionSubTitle>Resources</SectionSubTitle>
        <Divider />
        <UList>
          <li>
            The project is online at
            <Space>
              <CustomLinkProject>HTTPS://ROCKET.CHAT</CustomLinkProject>
            </Space>
          </li>
          <li>
            Access the project's source on
            <Space>
              <CustomLinkProject>GITHUB</CustomLinkProject>
            </Space>
          </li>
        </UList>
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
