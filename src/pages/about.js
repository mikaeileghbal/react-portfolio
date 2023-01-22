import React from "react";
import styled from "styled-components";
import { AnimatedLetters, Social } from "../components";
import { Section, StyledButton, Text } from "../styles/global";
import theme from "../styles/theme";

const HeroInfo = styled.div`
  ${theme.mixin.centerd}
  height: 61.5vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const HeroButton = styled.div`
  ${theme.mixin.centerd}
  margin-top: 21vh;
  padding: 1em;
`;

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 29px;
  text-align: center;
  color: ${theme.colors.greenText};
`;
console.log(theme.colors.greenHover);

export default function About() {
  const letterClass = "text-animate";

  const saluLetters = [..."Hello, my name is Mikaeil Eghbal.".split("")];
  const p1 = [
    ..."I am a web developer and javascript specialist focused on the front-end.".split(
      ""
    ),
  ];
  console.log(saluLetters);
  console.log(p1);

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
          I don't bother to work at the back-end and interact with databases
          like mongoDB and MySQL.
        </Text>
        <Text>
          Feel free to take a look at my latest projects on the portfolio page.
        </Text>
        <Text>Remotely or on-site available. mikaeileghbal@gmail.com</Text>
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
