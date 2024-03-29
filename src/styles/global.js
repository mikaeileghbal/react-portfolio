import styled, { css, keyframes } from "styled-components";
import theme from "./theme";

const { colors } = theme;

const spinAnim = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 84px 20px;

  @media screen and (max-width: ${theme.breakPoints.md}px) {
    padding: 42px 20px;
    max-width: 500px;
  }

  @media screen and (max-width: ${theme.breakPoints.ss}px) {
    max-width: 600px;
  }

  @media only print {
    padding: 1em;
  }
`;

export const Section = styled.section``;

export const Title = styled.h3`
  position: relative;
  font-weight: 700;
  font-size: 42px;

  @media only print {
    font-size: 24px;
  }
`;
export const SectionTitle = styled.h1`
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 10px;

  @media screen and (max-width: ${theme.breakPoints.sm}px) {
    line-height: 1;
  }

  @media only print {
    font-size: 32px;
  }
`;

export const SectionSubTitle = styled.h2`
  position: relative;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 12px;
  margin-top: 32px;

  @media only print {
    font-size: 22px;
    letter-spacing: -1px;
    margin-top: 16px;
    margin-bottom: 8px;
    text-transform: capitalize;
  }
`;

export const SubTitle = styled(SectionSubTitle)`
  font-size: 18px;
  letter-spacing: -0.5px;
  margin-top: 22px;

  @media only print {
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export const SubTitleMinor = styled(SectionSubTitle)`
  font-size: 14px;
  font-weight: 500;
  margin-top: -0.5em;
  letter-spacing: 0;

  @media only print {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const Text = styled.p`
  color: ${colors.grayDark};
  max-width: 800px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.95;
  margin-top: 2px;

  @media screen and (max-width: ${theme.breakPoints.sm}px) {
    font-size: 1em;
    line-height: 1.75em;
    font-weight: 400;
  }

  @media only print {
    font-weight: 300;
    font-size: 12px;
    line-height: 1.6;
    margin-top: 2px;
  }
`;

export const TextSmall = styled(Text)`
  font-size: 14px;
  font-weight: 400;
`;

export const TextGroup = styled.div`
  margin-bottom: 3em;

  p + p {
    margin-top: 1em;
  }
`;

export const UList = styled.ul`
  margin-bottom: 0.6em;
  padding: 0 0 0 1.4em;
  list-style: circle;

  li {
    margin-bottom: 3px;
    line-height: 2;
    font-size: 16px;
    color: ${colors.grayDark};

    div {
      @media screen and (max-width: ${theme.breakPoints.lg}px) {
        display: flex;
        flex-direction: column;
      }
    }

    @media only print {
      font-size: 12px;
    }
  }
`;

export const Space = styled.span`
  display: inline-block;
  margin: 0 0.3em;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  position: relative;
  align-items: center;
  text-decoration: none;
  padding: 1.1em 3em;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backColor};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 3px 0 0 ${colors.greenShadow}, 0 7px 0 0 black;

  &:hover {
    transform: translate3d(0, 1px, 0);
    background-color: ${(props) => props.backcolo};
    box-shadow: 0 2px 0 0 ${colors.greenShadow}, 0 5px 0 0 black;
  }

  &:disabled {
    cursor: default;
    color: silver;
    box-shadow: 0 2px 0 0 #666;
    background-color: ${colors.grayDark};

    ${(props) =>
      props.sending
        ? css`
            &::before {
              content: "";
              position: absolute;
              width: 16px;
              height: 16px;
              top: calc(50% - 8px);
              left: 10px;
              border-radius: 50%;
              border-width: 2px 2px 2px 2px;
              border-style: solid;
              border-color: white white white transparent;
              animation: ${spinAnim} 2s linear infinite;
            }
          `
        : ``}
  }

  span {
    margin-left: 0.5em;
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

  @media screen and (max-width: ${theme.breakPoints.md}px) {
    height: 50px;
    width: 50px;
    padding-left: 0;
    margin-left: 0;
  }

  span {
    display: inline-block;
  }
`;

export const FacebookButton = styled(SocialButton)`
  background-color: ${colors.facebook};
  color: white;
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
  position: relative;
  padding: 8px 8px;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #222;
  border-radius: 3px;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.15);
  background-color: ${colors.blueLight};
  color: ${colors.grayDark};
  overflow: hidden;
  z-index: 0;

  &:hover {
    transform: none;
    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 50%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: -1;
    transform-origin: left;
    transform: translate3d(
      ${(props) => (props.active ? "0" : "-105%")},
      0,
      0
    ); //scaleX(0);
    transition: transform 0.3s cubic-bezier(0.65, 0.05, 0.1, 1);
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    height: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: -2;
    transform-origin: right;
    transform: translate3d(
      ${(props) => (props.active ? "0" : "105%")},
      0,
      0
    ); // scaleX(0);
    transition: transform 0.3s cubic-bezier(0.65, 0.05, 0.1, 1);
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

export const CustomLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.02);
  color: ${colors.grayDark};
  z-index: 1;
  overflow: hidden;
  font-size: inherit;
  font-weight: inherit;
  line-height: 2;

  @media only print {
    font-size: 12px;
  }

  span {
    color: ${colors.grayDark};
    color: inherit;
    display: inline-block;
    width: 100%;
    text-align: center;
    transition: color 0.15s ease-out 0.1s;
  }

  &:hover {
    span {
      color: #999999;
    }
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

export const CustomLabel = styled.label`
  display: none;
`;

export const CustomInput = styled.input`
  border: 1px solid red;
  background-color: transparent;
  width: 80%;
  height: 100%;
  padding: 8px 14px 12px 36px;
  font-size: 18px;
  font-weight: 500;
  color: #797979;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #797979;
  outline: none;
  line-height: 100;
`;

export const CustomTextArea = styled.textarea`
  border: 1px solid red;
  background-color: transparent;
  width: 80%;
  padding: 8px 14px 12px 36px;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  color: #797979;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #797979;
  outline: none;
  //line-height: 100;
`;

export const FormGroup = styled.div`
  padding: 0.5em 0;
`;

export const Dot = styled.span`
  display: inline-block;
  margin: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.backColor};
`;

export const PortoButton = styled.a`
  position: fixed;
  top: 30px;
  left: 45px;
  width: 52px;
  height: 55px;
  display: block;
  cursor: pointer;
  z-index: 90;
  //transition: transform 0.25s ease-out 0.3s;

  @media screen and (max-width: ${theme.breakPoints.md}px) {
    left: 50%;
  }

  i {
    display: block;
    width: 8px;
    height: 8px;
    background-color: #7a7a7a;
    position: absolute;
    top: calc(50% - 4px);
    left: calc(50% - 4px);
    transition: transform 0.15s ease-out;

    &:nth-child(1) {
      transform: translateY(-11px) translateX(-11px);
    }
    &:nth-child(2) {
      transform: translateY(-11px) translateX(0);
    }
    &:nth-child(3) {
      transform: translateY(-11px) translateX(11px);
    }
    &:nth-child(4) {
      transform: translateX(-11px);
    }
    &:nth-child(5) {
    }
    &:nth-child(6) {
      transform: translateX(11px);
    }
    &:nth-child(7) {
      transform: translateY(11px) translateX(-11px);
    }
    &:nth-child(8) {
      transform: translateY(11px);
    }
    &:nth-child(9) {
      transform: translateY(11px) translateX(11px);
    }
  }
  &:hover {
    i {
      &:nth-child(1) {
        transform: translateY(-14px) translateX(-14px);
      }
      &:nth-child(2) {
        transform: translateY(-14px) translateX(0);
      }
      &:nth-child(3) {
        transform: translateY(-14px) translateX(14px);
      }
      &:nth-child(4) {
        transform: translateX(-14px);
      }
      &:nth-child(5) {
      }
      &:nth-child(6) {
        transform: translateX(14px);
      }
      &:nth-child(7) {
        transform: translateY(14px) translateX(-14px);
      }
      &:nth-child(8) {
        transform: translateY(14px);
      }
      &:nth-child(9) {
        transform: translateY(14px) translateX(14px);
      }
    }
  }
`;

export const Divider = styled.hr`
  display: block;
  height: 1px;
  width: 50%;
  background-color: #484848;
  position: relative;
  border: 0;
  margin: 0.5em 0 1em;

  @media only print {
    display: none;
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 1.5em;
  margin-bottom: 1em;
  display: flex;
  gap: 0.5em;
`;
