import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Animate from "./Animate";
import theme from "../styles/theme";

const StyledRibbon = styled.div`
  display: block;
  position: fixed;
  right: 0;
  top: 0;
  width: 200px;
  height: 200px;
  z-index: 20;

  @media only print {
    display: none;
  }
`;

const StyledLink = styled.a`
  position: absolute;
  display: block;
  height: 44px;
  width: 200%;
  left: -20%;
  top: -30%;
  z-index: 901;
  cursor: pointer;
  background-color: #026ccf;
  color: #f0f0f0;
  font-size: 13px;
  font-weight: 700;
  font-family: MontSerrat, Tahoma, Arial, sans-serif;
  padding-left: 25px;
  line-height: inherit;
  text-decoration: none;
  text-align: center;
  box-shadow: -2px 3px 1px rgb(0, 0, 0, 0.23);
  opacity: 1;
  text-transform: uppercase;
  transform: translate3d(0, 0, 0) rotate(45deg);
  transform-origin: 0 0;
  line-height: 47px;
  transition: background-color 0.2s ease-out 0s,
    transform 0.7s cubic-bezier(0.7, 0, 0.25, 1) 1s, opacity 0.2s ease-out 1s;

  @media screen and (max-width: ${theme.breakPoints.md}px) {
    font-size: 11px;
    width: 200%;
    left: -4%;
    top: -37%;
    padding-left: 0;
  } ;
`;

export default function Ribbon({ show }) {
  const location = useLocation();

  if (location.pathname === "/contact") return null;

  return (
    <StyledRibbon>
      <Animate
        show={show}
        enter="enterNext"
        exit="exitNext"
        classname="ribbon"
        delay="2.4s"
      >
        <StyledLink
          href="https://github.com/mikaeileghbal"
          target="_blank"
          title="Follow on Github"
        >
          follow on github
        </StyledLink>
      </Animate>
    </StyledRibbon>
  );
}
