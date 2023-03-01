import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";
import Animate from "./Animate";

const { colors } = theme;

const PageControl = styled.div`
  position: fixed;
  height: 50%;
  width: 150px;
  right: 0;
  top: 25%;

  &:hover a > span {
    transform: translate3d(0px, 0, 0);
    opacity: 1;
  }

  &:hover a > em::before {
    //transition: transform 0.16s ease-out;
    transform: rotate(-30deg);
  }

  &:hover a > em::after {
    //transition: transform 0.16s ease-out;
    transform: rotate(-150deg);
  }

  @media only print {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: inherit;
  color: ${colors.grayDark};
  text-decoration: none;

  span {
    position: absolute;
    display: inline-block;
    white-space: nowrap;
    top: calc(50% - 15.5px);
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    opacity: 0;
    text-transform: lowercase;
    font-size: 1.15em;
    line-height: 1.7em;
    /* transition: transform 0.7s cubic-bezier(0.7, 0, 0.25, 1) 0.25s,
      opacity 0.2s ease-out 0.75s; */
    transition: opacity 0.1s ease 0.125s,
      transform 0.3s cubic-bezier(0, 0, 0, 1) 0.125s;
    right: calc(50% + 5px);
    transform: translate3d(30px, 0, 0);
  }
`;

const Arrow = styled.em`
  display: block;
  position: absolute;
  height: 36px;
  width: 36px;
  top: calc(50% - 18.5px);
  left: calc(50% - 18px);
  transition: transform 0.2s ease-out 0.2s;

  &::before {
    top: -50%;
    transform: rotate(-45deg);
    content: " ";
    position: absolute;
    right: 0;
    height: 100%;
    width: 2px;
    background-color: ${colors.grayDark}; //#7a7a7a;
    transform-origin: 50% 100% 0;
    transition: transform 0.16s ease-out;
  }

  &::after {
    top: calc(-50% + -1px);
    transform: rotate(-135deg);

    content: " ";
    position: absolute;
    right: 0;
    height: 100%;
    width: 2px;
    background-color: ${colors.grayDark}; //#7a7a7a;
    transform-origin: 50% 100% 0;
    transition: transform 0.16s ease-out;
  }
`;

const PageControlPrev = styled(PageControl)`
  left: 0;
  right: unset;

  &:hover a > em::before {
    //transition: transform 0.16s ease-out;
    transform: rotate(30deg);
  }

  &:hover a > em::after {
    //transition: transform 0.16s ease-out;
    transform: rotate(150deg);
  }
`;

const StyledLinkPrev = styled(StyledLink)`
  span {
    right: unset;
    left: calc(50% + 5px);
    transform: translate3d(-30px, 0, 0);
  }
`;

const ArrowPrev = styled(Arrow)`
  left: unset;
  right: calc(50% + 16px);

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(135deg);
  }
`;

export default function Next({ to, children, show }) {
  return (
    <PageControl>
      <Animate
        show={show}
        enter="enterNext"
        exit="exitNext"
        classname="next"
        delay="1.4s"
      >
        <StyledLink to={to}>
          <span>{children}</span>
          <Arrow></Arrow>
        </StyledLink>
      </Animate>
    </PageControl>
  );
}

export function Previous({ to, children, show }) {
  return (
    <PageControlPrev>
      <Animate
        show={show}
        enter="enterLeft"
        exit="exitLeft"
        classname="next"
        delay="1.6s"
      >
        <StyledLinkPrev to={to}>
          <ArrowPrev></ArrowPrev>
          <span>{children}</span>
        </StyledLinkPrev>
      </Animate>
    </PageControlPrev>
  );
}
