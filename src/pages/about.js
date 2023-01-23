import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AnimatedLetters, Social } from "../components";
import { Section, StyledButton, Text } from "../styles/global";
import theme from "../styles/theme";

const HeroInfo = styled.div`
  ${theme.mixin.centerd}
  height: 62.5vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const HeroButton = styled.div`
  ${theme.mixin.centerd}
  margin-top: 20vh;
  padding: 1em;
`;

const HeroTitle = styled.h3`
  font-weight: 700;
  font-size: 29px;
  text-align: center;
  color: ${theme.colors.greenText};
  margin-bottom: 6px;
`;

export default function About() {
  const navigate = useNavigate();
  const saluLetters = [
    ..."Hello, my name is Mikaeil Eghbal.".replace(/\s/g, "-").split(""),
  ];
  const p1 = [
    ..."I am a web developer and javascript specialist focused on the front-end."
      .replace(/\s/g, "-")
      .split(""),
  ];
  const p2 = [
    ..."Check out my articles, React and React Native UI components at the code laboratory."
      .replace(/\s/g, "-")
      .split(""),
  ];
  const p3 = [
    ..."Feel free to take a look at my latest projects on the portfolio page."
      .replace(/\s/g, "-")
      .split(""),
  ];
  const p4 = [
    ..."Remotely or on-site available. mikaeileghbal@gmail.com"
      .replace(/\s/g, "-")
      .split(""),
  ];

  const gotoPortfolio = () => navigate("/portfolio");
  return (
    <Section>
      <HeroInfo>
        <HeroTitle>
          <AnimatedLetters letters={saluLetters} initialIndex={1} />
        </HeroTitle>
        <Text>
          <AnimatedLetters letters={p1} initialIndex={34} />
        </Text>
        <Text>
          <AnimatedLetters letters={p2} initialIndex={106} />
        </Text>
        <Text>
          <AnimatedLetters letters={p3} initialIndex={196} />
        </Text>
        <Text>
          <AnimatedLetters letters={p4} initialIndex={265} />
        </Text>
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
    </Section>
  );
}
