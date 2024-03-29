import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AnimatedLetters, Next, Social } from "../components";
import Animate from "../components/Animate";
import {
  CustomLink,
  Section,
  SectionCentered,
  StyledButton,
  Text,
} from "../styles/global";
import theme from "../styles/theme";

const HeroInfo = styled.div`
  ${theme.mixin.centerd}
  height: 62vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1.2em;

  @media screen and (max-width: ${theme.breakPoints.sm}px) {
    margin-top: 0em;
  }
`;

const HeroButton = styled.div`
  ${theme.mixin.centerd}
  margin-top: 20.5vh;
  padding: 1em;

  @media screen and (max-width: ${theme.breakPoints.ss}px) {
    display: none;
  }
`;

const HeroTitle = styled.h3`
  font-weight: 700;
  font-size: 29px;
  text-align: center;
  color: ${theme.colors.greenText};
  margin-bottom: 6px;

  @media screen and (max-width: ${theme.breakPoints.sm}px) {
    font-size: 1.3em;
  }
`;

const blinkAnimation = keyframes`
  0%{opacity:0}
  50%{opacity:1}
  100%{opacity:0}

`;

const fadeAnimation = keyframes`
  from{opacity:0}
  to{opacity:1}
`;

const Blink = styled.span`
  //display: inline-block;
  position: absolute;

  opacity: 0;
  animation-name: ${fadeAnimation};
  animation-delay: 7.5s;
  animation-fill-mode: forwards;

  span {
    display: inline-block;
    height: 2px;
    width: 8px;
    background-color: ${theme.colors.grayDark};
    animation-name: ${blinkAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-direction: normal;
    animation-timing-function: ease;
  }
`;

const parafs = [
  { text: "Hello, my name is Mikaeil Eghbal.", index: 1 },
  {
    text: "I am a web developer and JavaScript specialist focused on the frontend.",
    index: 34,
  },
  {
    text: "Send me a message using the contact form or social links available on the contact page.",
    index: 105,
  },
  {
    text: "Feel free to take a look at my latest projects on the portfolio page.",
    index: 188,
  },
  {
    text: "Remotely or on site available. mikaeileghbal@gmail.com",
    index: 257,
  },
];

export default function About() {
  const [show, setShow] = useState(true);

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
        {parafs.slice(1).map((paraf, index) => (
          <AboutText
            key={paraf.index}
            text={paraf.text.replace(/\s/g, "-").split("")}
            initialIndex={paraf.index}
            blink={index === 3}
          />
        ))}

        {/* <CustomLinkAbout href="#">
          <span>mikaeileghbal@yaho.com</span>
        </CustomLinkAbout> */}
      </HeroInfo>
      <HeroButton>
        <StyledButton
          onClick={gotoPortfolio}
          textColor="white"
          backColor={theme.colors.green}
        >
          take a look at my work
        </StyledButton>
      </HeroButton>
      {/* <Animate
        show={show}
        enter="enterSocial"
        exit="exitSocial"
        classname="social"
      > */}
      <Social />
      {/* </Animate> */}
      <Next to="/portfolio" show={show}>
        portfolio
      </Next>
    </Section>
  );
}

function AboutText({ text, initialIndex, blink }) {
  return (
    <Text>
      <AnimatedLetters letters={text} initialIndex={initialIndex} />
      {blink && (
        <Blink>
          <span></span>
        </Blink>
      )}
    </Text>
  );
}
