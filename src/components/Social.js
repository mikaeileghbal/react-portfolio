import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";
import {
  GithubButton,
  LinkedinButton,
  InstagramkButton,
} from "../styles/global";
import theme from "../styles/theme";

const Follow = styled.div`
  position: fixed;
  left: 0;
  top: calc(50% - 165px / 2);
  width: 55px;
  //transform: translateY(calc(-50% + 1px));
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledItem = styled.li`
  transform: translateX(-20px);
  transition: transform 425ms cubic-bezier(0.05, 0.65, 0.18, 1);

  button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &:hover {
    transform: translateX(0px);
  }
`;

export default function Social() {
  return (
    <Follow>
      <StyledList>
        <StyledItem>
          <GithubButton href="https://mikaeileghbal.github.com" target="blank">
            <FaGithub size={32} />
          </GithubButton>
        </StyledItem>
        <StyledItem>
          <LinkedinButton
            href="https://mikaeileghbal.github.com"
            target="blank"
            textColor={theme.colors.blueLight}
            backColor={theme.colors.blueDark}
          >
            <FaLinkedinIn size={28} />
          </LinkedinButton>
        </StyledItem>
        <StyledItem>
          <InstagramkButton
            href="https://mikaeileghbal.github.com"
            target="blank"
          >
            <FaInstagram size={33} />
          </InstagramkButton>
        </StyledItem>
      </StyledList>
    </Follow>
  );
}
