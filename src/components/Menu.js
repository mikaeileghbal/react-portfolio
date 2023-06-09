import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useDirection } from "../providers/DirectionProvider";
import { CustomLink } from "../styles/global";
import theme from "../styles/theme";

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
0%{
  
}

100%{
  transform: translate(0, 0) scale(1) rotate(45deg);
}
`;

const CustomBurger = styled.div`
  position: fixed;
  right: 40px;
  top: 40px;
  z-index: 9999;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: ${theme.breakPoints.md}px) {
    bottom: 30px;
    right: 10px;
    top: auto;
    width: 59px;
    height: 59px;
    background-color: #111;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 3px rgb(0, 0, 0, 0.15);
  }

  &.clicked {
    /* animation-name: ${burgerRotate};
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards; */
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
  height: 100vh;
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

    @media screen and (max-width: ${theme.breakPoints.md}px) {
      margin-left: 25px;
      margin-right: 25px;
    }
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

  &:hover > span {
    color: #999999;
  }

  &::before {
    background-color: ${colors.blueDark};
  }
  &::after {
    background-color: #212632;
  }
`;

const pages = {
  "/": 0,
  "/portfolio": 1,
  "/contact": 2,
  "/resume": 3,
};

export default function Menu({ show }) {
  const { setDirection } = useDirection();
  const { activeLink, setActiveLink } = useDirection(0);
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    setShowMenu((prev) => !prev);
  };

  const goToPath = (e, path, index) => {
    e.preventDefault();

    if (index >= activeLink) {
      setDirection("left");
    } else {
      setDirection("right");
    }
    setActiveLink(index);
    navigate(path);
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
        <CustomLinkMenu
          active={location.pathname === "/" ? true : false}
          href=""
          onClick={(e) => goToPath(e, "/", 0)}
        >
          <span>about</span>
        </CustomLinkMenu>

        <CustomLinkMenu
          class="top-menu-link"
          active={location.pathname === "/portfolio" ? true : false}
          href=""
          onClick={(e) => goToPath(e, "/portfolio", 1)}
        >
          <span>portfolio</span>
        </CustomLinkMenu>

        <CustomLinkMenu
          class="top-menu-link"
          active={location.pathname === "/contact" ? true : false}
          href=""
          onClick={(e) => goToPath(e, "/contact", 2)}
        >
          <span>contact</span>
        </CustomLinkMenu>

        <CustomLinkMenu
          class="top-menu-link"
          active={location.pathname === "/resume" ? true : false}
          href=""
          onClick={(e) => goToPath(e, "/resume", 3)}
        >
          <span>resume</span>
        </CustomLinkMenu>
      </CustomNav>

      {/* <Animate
        show={show}
        enter="enterNext"
        exit="exitNext"
        classname="menu"
        delay="1.6s"
      > */}
      <CustomBurger
        className={`${showMenu ? "open clicked" : "clicked"}`}
        onClick={toggleMenu}
        onAnimationEnd={onAnimationEnd}
      >
        <span></span>
        <span></span>
        <span></span>
      </CustomBurger>
      {/* </Animate> */}
    </StyledMenu>
  );
}
