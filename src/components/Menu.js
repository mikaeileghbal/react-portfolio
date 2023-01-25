import React, { useState } from "react";
import styled from "styled-components";
import { CustomLink } from "../styles/global";
import theme from "../styles/theme";

const { colors } = theme;

const StyledMenu = styled.header`
  position: absolute;
  width: 100%;
  display: block;
  z-index: 100;

  /* .top-menu-nav:before {
    content: "for a quick search just start typing ..";
    position: absolute;
    bottom: 5%;
    left: calc(50%);
    width: 300px;
    color: rgb(51, 51, 51);
    text-align: center;
    font-size: 13px;
  } */
`;

const CustomBurger = styled.div`
  position: fixed;
  top: 40px;
  z-index: 9999;
  cursor: pointer;
  background-color: transparent;
  right: 42px;
  text-align: center;

  span {
    display: block;
    position: relative;
    width: 42px;
    height: 2px;
    margin: 8px;
    background-color: ${colors.grayDark}; // #7a7a7a;
    z-index: 1000;
    transition: transform 0.45s cubic-bezier(0.43, 0.77, 0.15, 1.5);
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
  left: 0;
  top: 0;
  background-color: ${colors.blueMenu}; //rgb(51, 51, 51);
  z-index: 100;
  padding: 10% 0;
  transition: transform 0.45s cubic-bezier(0.45, 0, 0, 1);

  &.menu-show {
    transform: translate3d(0, 0, 0);
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
  max-width: 600px;
  margin: 0 auto;
  height: calc(100% / 4);
  font-size: 2em;
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

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <StyledMenu id="page-header" class="top-menu">
      <CustomNav id="menu-nav" className={`${showMenu ? "menu-show" : ""}`}>
        <CustomLinkMenu href="#" active={true}>
          <span>about</span>
        </CustomLinkMenu>
        <CustomLinkMenu class="top-menu-link" href="#">
          <span>portfolio</span>
        </CustomLinkMenu>
        <CustomLinkMenu class="top-menu-link" href="#">
          <span>contact</span>
        </CustomLinkMenu>
        <CustomLinkMenu class="top-menu-link" href="#">
          <span>resume</span>
        </CustomLinkMenu>
      </CustomNav>

      <CustomBurger
        className={`${showMenu ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </CustomBurger>
    </StyledMenu>
  );
}
