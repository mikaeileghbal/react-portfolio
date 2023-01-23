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
  line-height: 2;
  margin-top: 2px;
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

export const TagButton = styled(StyledButton)`
  background-color: ${(props) =>
    props.active ? colors.greenGray : colors.blueLight};
  color: ${colors.grayDark};
  //box-shadow: 0 3px 0 0 ${colors.greenGray}, 0 7px 0 0 black;
  box-shadow: 0 3px 0 0 black;
  padding: 8px 8px;

  &:hover {
    transform: translate3d(0, 1px, 0);
    background-color: ${(props) =>
      props.active ? colors.greenGray : colors.blueLight};
    box-shadow: 0 2px 0 0 black;
  }
`;
