import { css } from "styled-components";

const theme = {
  colors: {
    grayDark: "#8b9188",
    greenGray: "#525e65",
    greenText: "#dbe8d4",
    blueDark: "#222733",
    blueLight: "#2b303c",
    blueMenu: "#2b303c",
    linkedin: "#0079b1",
    facebook: "#3d6aa9",
    github: "#4f4f4f",
    green: "#009688",
    greenHover: "#00897b",
    greenShadow: "#00796b",
  },
  mixin: {
    centerd: css`
      text-align: center;
    `,
  },
  breakPoints: {
    xs: 0,
    sm: 600,
    md: 720,
    ss: 1024,
    lg: 1200,
    xl: 1536,
  },
};

export default theme;
