import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const Container = styled.section`
  max-width: $container-max-width;
  margin: 0 auto;
`;

export const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Title = styled.h1`
  position: relative;
  font-weight: 700;
  font-size: 42px;
`;

export const Text = styled.p`
  color: ${colors.grayDark};
  max-width: 800px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  margin-top: 8px;
`;

export const StyledButton = styled.button`
  text-decoration: none;
  padding: 1.2em 3em;
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

export const TagButton = styled(SocialButton)``;
