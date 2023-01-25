import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AnimatedLetters, Next, Social } from "../components";
import { CustomLink, Section, StyledButton, Text } from "../styles/global";
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

const CustomLinkAbout = styled(CustomLink)`
  font-size: 14px;
`;

const BlinkAnimation = keyframes`
  0%{opacity:0}
  50%{opacity:1}
  100%{opacity:0}

`;

const Blink = styled.span`
  //display: inline-block;
  width: 8px;
  height: 2px;
  background-color: ${theme.colors.grayDark};
  animation-name: ${BlinkAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease;
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
        <Blink></Blink>
        <CustomLinkAbout href="#">
          <span>mikaeileghbal@yaho.com</span>
        </CustomLinkAbout>
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
