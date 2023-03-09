import React, { useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ContactForm, Next, Previous } from "../components";

import {
  Container,
  CustomLink,
  Section,
  SectionTitle,
  Space,
  StyledButton,
  Text,
} from "../styles/global";
import theme from "../styles/theme";

const ButtonWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5em;

  margin: 1em 0 0;
`;
const CustomLinkContact = styled(CustomLink)`
  font-weight: 700;
  font-size: 18px;

  &:hover {
    color: #999999;
  }
`;

const SubTitle = styled.h4`
  font-weight: 700;
  letter-spacing: 0;
  font-size: 22px;
  color: ${theme.colors.grayDark};

  margin-bottom: 6px;
`;

const StyledFacebook = styled(StyledButton)`
  padding: 0.8em 1.2em;
  box-shadow: 0 3px 0 0 #064975, 0 7px 0 0 black;
  &:hover {
    box-shadow: 0 2px 0 0 #064975, 0 5px 0 0 black;
  }
`;
const StyledLinkedin = styled(StyledButton)`
  padding: 0.8em 1.2em;
  box-shadow: 0 3px 0 0 #18427e, 0 7px 0 0 black;
  &:hover {
    box-shadow: 0 2px 0 0 #18427e, 0 5px 0 0 black;
  }
`;
const StyledGithub = styled(StyledButton)`
  padding: 0.8em 1.2em;
  box-shadow: 0 3px 0 0 #353434, 0 7px 0 0 black;
  &:hover {
    box-shadow: 0 2px 0 0 #353434, 0 5px 0 0 black;
  }
`;

export default function Contact() {
  const [show, setShow] = useState(true);

  const gotoUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Section>
      <Container>
        <SectionTitle style={{ marginTop: "1em" }}>Get in touch</SectionTitle>
        <Text>
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi,
          <br />
          fill up the awesome form below or send an email to
          <Space>
            <CustomLinkContact
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:mikaeileghbal@gmail.com";
              }}
            >
              mikaeileghbal@gmail.com
            </CustomLinkContact>
          </Space>
          and ~let's talk.
        </Text>

        <ContactForm />

        <SubTitle>Let's get social</SubTitle>
        <Text>
          Follow my online fan page on Facebook and profiles on Twitter, GitHub
          and Linkedin.
        </Text>
        <ButtonWrap>
          <StyledFacebook
            textColor="white"
            backColor={theme.colors.facebook}
            onClick={() => gotoUrl("https://facebook.com/mikaeileghbal")}
          >
            <FaFacebookF size={22} />
            <span>facebook</span>
          </StyledFacebook>
          <StyledLinkedin
            textColor="white"
            backColor={theme.colors.linkedin}
            onClick={() => gotoUrl("https://linkedin.com/in/mikaeil-eghbal")}
          >
            <FaLinkedinIn size={22} />
            <span>linkedin</span>
          </StyledLinkedin>
          <StyledGithub
            textColor="white"
            backColor={theme.colors.github}
            onClick={() => gotoUrl("https://github.com/mikaeileghbal")}
          >
            <FaGithub size={22} />
            <span>github</span>
          </StyledGithub>
        </ButtonWrap>
        <Next to="/resume" show={show}>
          resume
        </Next>
        <Previous to="/portfolio" show={show}>
          portfolio
        </Previous>
      </Container>
    </Section>
  );
}
