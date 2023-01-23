import React from "react";
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

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 29px;
  text-align: center;
  color: ${theme.colors.greenText};
  margin-bottom: 7px;
`;

export default function About() {
  const letterClass = "text-animate";

  const saluLetters = [..."Hello, my name is Mikaeil Eghbal.".split("")];
  const p1 = [
    ..."I am a web developer and javascript specialist focused on the front-end.".split(
      ""
    ),
  ];
  const p2 = [
    ..."I don't bother to work at the back-end and interact with databases like mongoDB and MySQL.".split(
      ""
    ),
  ];
  const p3 = [
    ..."Feel free to take a look at my latest projects on the portfolio page.".split(
      ""
    ),
  ];
  const p4 = [
    ..."Remotely or on-site available. mikaeileghbal@gmail.com".split(""),
  ];

  console.log(saluLetters);
  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);

  return (
    <Section>
      <HeroInfo>
        <HeroTitle>
          <AnimatedLetters
            className={letterClass}
            letters={saluLetters}
            initialIndex={1}
          />
        </HeroTitle>
        <Text>
          <AnimatedLetters
            className={letterClass}
            letters={p1}
            initialIndex={34}
          />
        </Text>
        <Text>
          <AnimatedLetters
            className={letterClass}
            letters={p2}
            initialIndex={106}
          />
        </Text>
        <Text>
          <AnimatedLetters
            className={letterClass}
            letters={p3}
            initialIndex={196}
          />
        </Text>
        <Text>
          <AnimatedLetters
            className={letterClass}
            letters={p4}
            initialIndex={265}
          />
        </Text>
      </HeroInfo>
      <HeroButton>
        <StyledButton
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
