import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledRibbon = styled.div`
  display: block;
  position: fixed;
  right: 0;
  top: 0;
  width: 200px;
  height: 200px;
  z-index: 10;
`;

const StyledLink = styled.a`
  position: absolute;
  display: block;
  width: 200%;
  height: 44px;
  left: -15%;
  top: -25%;
  z-index: 901;
  font-size: 13px;
  font-weight: 700;
  line-height: 47px;
  text-decoration: none;
  text-align: center;
  color: #f0f0f0;
  background-color: #026ccf;
  box-shadow: -2px 3px 1px rgba(0, 0, 0, 0.3);
  padding: 0;
  opacity: 1;
  text-transform: uppercase;
  transform: translate3d(0, 0, 0) rotate(45deg);
  transform-origin: 0 0;
  cursor: pointer;
  transition: background-color 0.2s ease-out 0s,
    transform 0.7s cubic-bezier(0.7, 0, 0.25, 1) 1s, opacity 0.2s ease-out 1s;
`;

export default function Ribbon() {
  return (
    <StyledRibbon>
      <StyledLink
        href="https://github.com/mikaeileghbal"
        target="_blank"
        title="Follow on Github"
      >
        follow on github
      </StyledLink>
    </StyledRibbon>
  );
}
