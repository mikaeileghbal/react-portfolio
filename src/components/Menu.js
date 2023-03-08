import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { CustomLink } from "../styles/global";
import theme from "../styles/theme";
import Animate from "./Animate";

const { colors } = theme;

const StyledMenu = styled.header`
  position: fixed;
  right: 42px;
  top: 40px;
  display: block;
  z-index: 99;

  @media screen and (max-width: ${theme.breakPoints.md}px) {
    top: auto;
    right: 10px;
    bottom: 30px;
  }

  @media only print {
    display: none;
  }
`;

const burgerRotate = keyframes`
from{
  
  transform: rotate(180deg);
}
to{

  transform:rotate(0deg);
}
`;

const CustomBurger = styled.div`
  /* position: fixed;
  right: 28px;
  top: 25px; */
  z-index: 9999;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: ${theme.breakPoints.md}px) {
    //top: calc(100vh - 105px);
    //right: 0px;
    width: 59px;
    height: 59px;
    background-color: #111;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 3px rgb(0, 0, 0, 0.15);
  }

  &.clicked {
    animation-name: ${burgerRotate};
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }

  span {
    display: block;
    position: relative;
    width: 42px;
    height: 2px;
    margin: 8px;
    background-color: ${colors.grayDark}; // #7a7a7a;
    z-index: 1000;
    transition: transform 0.45s cubic-bezier(0.43, 0.77, 0.15, 1.5);

    @media screen and (max-width: ${theme.breakPoints.md}px) {
      width: 24px;
    }
  }
  &:not(.open):hover > :first-child {
    transform: translate(0, -4px);
  }
  &:not(.open):hover > :last-child {
    transform: translate(0, 4px);
  }
  &.open:hover > :first-child {
    transform: translate(0px, 10px) scale(1.5) rotate(-45deg);
  }
  &.open:hover > :last-child {
    transform: translate(0px, -10px) scale(1.5) rotate(45deg);
  }
  &.open > span:first-child {
    transform: translate(0px, 10px) scale(1) rotate(-45deg);
  }
  &.open > span:nth-child(2) {
    transform: translate(0px, 10px) scale(0);
  }
  &.open > span:last-child {
    transform: translate(0px, -10px) scale(1) rotate(45deg);
  }
`;

const CustomNav = styled.nav`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  transform-origin: top;
  transform: translate3d(0, -100%, 0);
  opacity: 0;
  left: 0;
  top: 0;
  background-color: ${colors.blueMenu}; //rgb(51, 51, 51);

  padding: 10% 0;
  transition: transform 0.45s cubic-bezier(0.45, 0, 0, 1), opacity 0s 0.45s;

  a {
    text-decoration: none;
  }

  &.menu-show {
    transform: translate3d(0, 0, 0);
    opacity: 1;
    transition: transform 0.45s cubic-bezier(0.45, 0, 0, 1), opacity 0s;
  }
  &.menu-show a {
    transform: translate3d(0, 0, 0);
  }

  a:nth-child(1) {
    transition-delay: 0.36s;
  }
  a:nth-child(2) {
    transition-delay: 0.24s;
  }
  a:nth-child(3) {
    transition-delay: 0.12s;
  }
`;

const CustomLinkMenu = styled(CustomLink)`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  height: calc(100% / 4);
  font-size: 2em;
  font-weight: 700;

  color: ${(props) => (props.active ? "#999999" : "#5a5a5a")};
  background-color: rgba(0, 0, 0, 0.02);
  transform: translate3d(0, -110px, 0);
  transition: transform 0.55s cubic-bezier(0, 0.35, 0, 1),
    color 0.15s ease-out 0.1s;

  &:hover {
    color: #999999;
  }

  &::before {
    background-color: ${colors.blueDark};
  }
  &::after {
    background-color: #212632;
  }
`;

export default function Menu({ show }) {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = (e) => {
    setShowMenu((prev) => !prev);
  };

  const onAnimationEnd = (e) => {
    e.target.classList.remove("clicked");
  };

  return (
    <StyledMenu id="page-header" class="top-menu">
      <CustomNav
        id="menu-nav"
        className={`${showMenu ? "menu-show" : ""}`}
        onClick={toggleMenu}
      >
        <Link to="/">
          <CustomLinkMenu active={location.pathname === "/" ? true : false}>
            <span>about</span>
          </CustomLinkMenu>
        </Link>
        <Link to="/portfolio">
          <CustomLinkMenu
            class="top-menu-link"
            active={location.pathname === "/portfolio" ? true : false}
          >
            <span>portfolio</span>
          </CustomLinkMenu>
        </Link>
        <Link to="/contact">
          <CustomLinkMenu
            class="top-menu-link"
            active={location.pathname === "/contact" ? true : false}
          >
            <span>contact</span>
          </CustomLinkMenu>
        </Link>
        <Link to="/resume">
          <CustomLinkMenu
            class="top-menu-link"
            active={location.pathname === "/resume" ? true : false}
          >
            <span>resume</span>
          </CustomLinkMenu>
        </Link>
      </CustomNav>

      <Animate
        show={show}
        enter="enterNext"
        exit="exitNext"
        classname="menu"
        delay="1.6s"
      >
        <CustomBurger
          className={`${showMenu ? "open clicked" : "clicked"}`}
          onClick={toggleMenu}
          onAnimationEnd={onAnimationEnd}
        >
          <span></span>
          <span></span>
          <span></span>
        </CustomBurger>
      </Animate>
    </StyledMenu>
  );
}
