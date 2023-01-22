import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";

const StyledHeader = styled.header`
  background-color: ${theme.colors.greenGray};
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 9;
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopNav = styled.nav`
  height: 100%;
  width: calc(min(75vw, 400px));
  position: fixed;
  z-index: 1;
  top: 0;
  right: -100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  transition: right 0.2s;

  //min tablet viewport
  position: static;
  width: auto;
  flex-direction: row;
  padding: 0;
`;

const TopMenuList = styled.ul``;

const TopMenuItem = styled.li`
  display: inline-block;
  position: relative;
  padding: 0 2px;
`;

const StyledLink = styled(Link)`
  position: relative;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  color: ${theme.colors.greenText};
  transition: color 0.2s;
  padding: 15px 16px;
  display: block;

  &:hover {
    color: ${theme.colors.greenHover};
  }

  &:hover {
    &::before {
      transform: scaleY(1);
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    width: 100%;
    height: 4px;
    background-color: ${theme.colors.greenHover};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: 0.2s;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  &.active {
    color: ${theme.colors.greenHover};
    &::before {
      transform: scaleY(1);
    }
  }
`;

export default function Header() {
  const { pathname } = useLocation();
  console.log(pathname);

  const getClassName = (path) => {
    return `${pathname === path ? "active" : ""}`;
  };

  return (
    <StyledHeader class="" id="header">
      <Container>
        <TopNav>
          <TopMenuList>
            <TopMenuItem>
              <StyledLink to="/" className={getClassName("/")}>
                about
              </StyledLink>
            </TopMenuItem>
            <TopMenuItem>
              <StyledLink
                to="/portfolio"
                className={getClassName("/portfolio")}
              >
                portfolio
              </StyledLink>
            </TopMenuItem>
            <TopMenuItem>
              <StyledLink to="/contact" className={getClassName("/contact")}>
                contact
              </StyledLink>
            </TopMenuItem>
            <TopMenuItem>
              <StyledLink to="/resume" className={getClassName("/resume")}>
                resume
              </StyledLink>
            </TopMenuItem>
          </TopMenuList>
        </TopNav>
        <div class="menu-container menubtn">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </Container>
    </StyledHeader>
  );
}
