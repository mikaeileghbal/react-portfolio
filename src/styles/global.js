import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 84px 20px;
`;

export const Section = styled.section``;

export const Title = styled.h3`
  position: relative;
  font-weight: 700;
  font-size: 42px;
`;

export const SectionTitle = styled.h1`
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: ${colors.grayDark};
  max-width: 800px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.95;
  margin-top: 2px;
`;

export const TextSmall = styled(Text)`
  font-size: 14px;
  font-weight: 400;
`;

export const StyledButton = styled.button`
  text-decoration: none;
  padding: 1.1em 3em;
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backColor};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 3px 0 0 #2c7a5a, 0 7px 0 0 black;

  &:hover {
    transform: translate3d(0, 1px, 0);
    background-color: #73cca8;
    box-shadow: 0 2px 0 0 #2c7a5a, 0 5px 0 0 black;
  }
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 55px;
  padding-left: 20px;
  cursor: pointer;
`;

export const LinkedinButton = styled(SocialButton)`
  background-color: ${colors.linkedin};
  color: white;
`;

export const GithubButton = styled(SocialButton)`
  background-color: ${colors.github};
  color: white;
`;

export const InstagramkButton = styled(SocialButton)`
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  color: white;
`;

export const TagButton = styled(StyledButton)`
  background-color: ${(props) =>
    props.active ? colors.greenGray : colors.blueLight};
  color: ${colors.grayDark};
  //box-shadow: 0 3px 0 0 black;
  padding: 8px 8px;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.15);
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #222;
  border-radius: 3px;

  &:hover {
    transform: translate3d(0, 1px, 0);
    background-color: ${(props) =>
      props.active ? colors.greenGray : colors.greenGray};
    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.15);
  }
`;

export const CustomLink = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  position: relative;
  /* width: 90%;
  max-width: 600px; */
  //margin: 0 auto;
  //height: calc(100% / 4);
  //font-size: 2em;
  background-color: rgba(0, 0, 0, 0.02);
  color: white;
  z-index: 1;
  transition: color 0.4s ease-in;
  overflow: hidden;
  font-size: 32px;
  font-weight: bold;
  line-height: 2;

  span {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: ${colors.grayDark};
    transition: 0.125s !important;
  }

  &:hover span {
    color: #a7ada3;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 75%;
    top: 0;
    left: 0;
    background-color: ${colors.blueMenu};
    z-index: -1;
    transform-origin: left;
    transform: translate3d(-100%, 0, 0); //scaleX(0);
    transition: transform 0.325s cubic-bezier(0.65, 0.2, 0, 1);
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    height: 75%;
    background-color: ${colors.blueMenu};
    z-index: -2;
    transform-origin: right;
    transform: translate3d(100%, 0, 0); // scaleX(0);
    transition: transform 0.325s cubic-bezier(0.65, 0.2, 0, 1) 0.1s;
  }

  &:hover::before {
    z-index: -1;
    transform: translate3d(0, 0, 0); // scaleX(1);
  }
  &:hover::after {
    z-index: -2;
    transform: translate3d(0, 0, 0); // scaleX(1);
  }
`;
