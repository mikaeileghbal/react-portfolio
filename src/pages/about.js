import React from "react";
import styled from "styled-components";
import { Button } from "../components";
import { Section, Text } from "../styles/global";
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

export default function About() {
  return (
    <Section>
      <HeroInfo>
        <HeroTitle>Hello, my name is Mikaeil Eghbal.</HeroTitle>
        <Text>
          I am a web developer and javascript specialist focused on the
          front-end.
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
        <Button>take a look at my work</Button>
      </HeroButton>
    </Section>
  );
}
