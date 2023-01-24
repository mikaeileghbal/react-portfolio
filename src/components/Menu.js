import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const { colors } = theme;

const StyledMenu = styled.header`
  position: absolute;
  width: 100%;
  display: block;
  z-index: 100;
  background-color: red;

  div#burger {
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
      //transition: all 0.5s ease-out;
      transition: transform 0.45s cubic-bezier(0.43, 0.77, 0.15, 1.5);
    }
    &:hover > :first-child {
      transform: translate(0, -4px);
      //transition: transform .45s cubic-bezier(.43,.77,.15,1.5);
    }
    &:hover > :last-child {
      transform: translate(0, 4px);
      //transition: transform .45s cubic-bezier(.43,.77,.15,1.5);
    }
  }

  // burger menu STYLES
  //==============================================
  .burger > span:first-child {
    transform: translate(0px, 10px) scale(1.5) rotate(-45deg);
    background-color: white;
  }

  .burger > span:last-child {
    transform: translate(0px, -10px) scale(1.5) rotate(45deg);
    background-color: white;
  }

  .top-menu-nav:before {
    content: "for a quick search just start typing ..";
    position: absolute;
    bottom: 5%;
    left: calc(50%);
    width: 300px;
    color: rgb(51, 51, 51);
    text-align: center;
    font-size: 13px;
  }

  // top nav STYLES
  //==============================================
  .top-menu-nav {
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

    a {
      display: flex;
      align-items: center;
      text-align: center;
      text-decoration: none;
      width: 90%;
      position: relative;
      max-width: 600px;
      margin: 0 auto;
      height: calc(100% / 4);
      font-size: 2em;
      background-color: rgba(0, 0, 0, 0.02);
      z-index: 1;
      transition: color 0.4s ease-in;

      span {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        color: ${colors.grayDark};
        transition: 0.125s !important;
      }

      &:hover span {
        color: #a7ada3;
      }

      &::before {
        content: "";
        width: 100%;
        transform-origin: left;
        transform: scaleX(0);
        height: 75%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: ${colors.blueDark};
        z-index: -1;
        transition: all 0.3s ease-in;
      }
      &::after {
        content: "";
        width: 100%;
        transform-origin: right;
        transform: scaleX(0);
        bottom: 0;
        right: 0;
        height: 75%;
        background-color: #212632;
        position: absolute;
        z-index: -2;
        transition: all 0.3s ease-in 125ms;
      }
      &:hover::before {
        z-index: -1;
        transform: scaleX(1);
        transition: transform 0.2s ease-in; //cubic-bezier(0.6,0.15,0,1);
      }
      &:hover::after {
        z-index: -2;
        transform: scaleX(1);
        transition: transform 0.2 ease-in; //cubic-bezier(0.6,0.15,0,1) 125ms;
      }
    }
  }

  // toggle top menu Show and Hide STYLES
  //==============================================
  .menu-show {
    transform: translate3d(0, 0, 0);
    //transition: transform 0.45s cubic-bezier(0.43, 0.77, 0.15, 1);
    //transition: transform 0.45s cubic-bezier(0.45, 0, 0, 1);
  }

  .menu-links {
    &::before {
      color: #8a8a8a;
      left: calc(50% - 150px);
      transition: all 2.5s ease;
    }
    a {
      span {
        color: ${colors.grayDark};
        transition: all 2.5s ease-in-out;
      }
    }
  }
`;

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const menuNav = useRef();
  const burger = useRef();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    menuNav.current.classList.toggle("menu-show");
    menuNav.current.classList.toggle("menu-links");
    burger.current.classList.toggle("burger");
  }, [showMenu]);

  return (
    <StyledMenu id="page-header" class="top-menu">
      <nav id="menu-nav" class="top-menu-nav" ref={menuNav}>
        <a class="top-menu-link" href="#">
          <span>about</span>
        </a>
        <a class="top-menu-link" href="#">
          <span>portfolio</span>
        </a>
        <a class="top-menu-link" href="#">
          <span>contact</span>
        </a>
        <a class="top-menu-link" href="#">
          <span>resume</span>
        </a>
      </nav>

      <div id="burger" class="" ref={burger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledMenu>
  );
}
