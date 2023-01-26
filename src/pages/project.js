import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Carousel } from "../components";
import { portfolio } from "../data/portfolio";
import {
  Container,
  Section,
  SectionSubTitle,
  SectionTitle,
  StyledButton,
  Text,
} from "../styles/global";
import theme from "../styles/theme";

export default function Project() {
  const [project, setProject] = useState({});
  const { title } = useParams();
  const images = ["githubuser.png", "dinomuz.png", "calendar.png"];

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
        <div>
          <StyledButton textColor="white" backColor={theme.colors.green}>
            visit the website{" "}
          </StyledButton>
        </div>
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
        <SectionSubTitle>Technical Sheet</SectionSubTitle>
        <Text>
          Code technologies I got involved with while working on this project.
        </Text>
        <ul>
          <li>UI/UX Design UI/UX Architecture</li>
          <li>UI/UX Animations</li>
          <li>HTML5 – semantic, audio, video, canvas</li>
          <li>CSS3 – preprocessed with LESS + LESSHAT</li>
          <li>Meteor.js</li>
          <li>Blaze</li>
          <li>MongoDB</li>
        </ul>
        <SectionSubTitle>Resources</SectionSubTitle>
        <ul>
          <li>
            The project is online at HTTPS://ROCKET.CHAT Access the project's
          </li>
          <li>source on GITHUB</li>
        </ul>
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
