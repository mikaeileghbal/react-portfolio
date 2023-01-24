import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AnimatedLetters, Next, Social } from "../components";
import { Section, StyledButton, Text } from "../styles/global";
import theme from "../styles/theme";

const HeroInfo = styled.div`
  ${theme.mixin.centerd}
  height: 62vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const HeroButton = styled.div`
  ${theme.mixin.centerd}
  margin-top: 20.5vh;
  padding: 1em;
`;

const HeroTitle = styled.h3`
  font-weight: 700;
  font-size: 29px;
  text-align: center;
  color: ${theme.colors.greenText};
  margin-bottom: 6px;
`;

const parafs = [
  { text: "Hello, my name is Mikaeil Eghbal.", index: 1 },
  {
    text: "I am a web developer and javascript specialist focused on the frontend.",
    index: 34,
  },
  {
    text: "Check out my articles, React and React Native UI components at the code laboratory.",
    index: 106,
  },
  {
    text: "Feel free to take a look at my latest projects on the portfolio page.",
    index: 196,
  },
  {
    text: "Remotely or on-site available. mikaeileghbal@gmail.com",
    index: 265,
  },
];

export default function About() {
  const navigate = useNavigate();

  const gotoPortfolio = () => navigate("/portfolio");

  return (
    <Section>
      <HeroInfo>
        <HeroTitle>
          <AnimatedLetters
            letters={parafs[0].text.replace(/\s/g, "-").split("")}
            initialIndex={1}
          />
        </HeroTitle>
        {parafs.slice(1).map((paraf) => (
          <AboutText
            key={paraf.index}
            text={paraf.text.replace(/\s/g, "-").split("")}
            initialIndex={paraf.index}
          />
        ))}
        <span></span>
      </HeroInfo>
      <HeroButton>
        <StyledButton
          onClick={gotoPortfolio}
          textColor={theme.colors.blueDark}
          backColor={theme.colors.greenHover}
        >
          take a look at my work
        </StyledButton>
      </HeroButton>
      <Social />
      <Next to="/portfolio">portfolio</Next>
    </Section>
  );
}

function AboutText({ text, initialIndex }) {
  return (
    <Text>
      <AnimatedLetters letters={text} initialIndex={initialIndex} />
    </Text>
  );
}
