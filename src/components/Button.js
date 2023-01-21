import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const { colors } = theme;

const StyledButton = styled.button`
  text-decoration: none;
  padding: 1.2em 3em;
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  color: ${colors.blueDark};
  background-color: ${colors.greenHover};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 3px 0 0 #2c7a5a, 0 7px 0 0 black;

  &:hover {
    transform: translateY(1px);
    background-color: #73cca8;
    box-shadow: 0 2px 0 0 #2c7a5a, 0 5px 0 0 black;
  }
`;

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
