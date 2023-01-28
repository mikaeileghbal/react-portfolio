import React from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import styled from "styled-components";
import {
  CustomInput,
  CustomLabel,
  FormGroup,
  StyledButton,
} from "../styles/global";
import theme from "../styles/theme";

const CustomForm = styled.form`
  margin: 2em 0;
  padding: 1em 0;
`;

const FormIcon = styled.span`
  position: absolute;
  transform: translate(10px, 10px);
  color: #797979;
`;
export default function ContactForm() {
  return (
    <CustomForm>
      <FormGroup>
        <CustomLabel htmlFor="name">Fill with your name</CustomLabel>
        <FormIcon>
          <FaUser />
        </FormIcon>
        <CustomInput
          type="text"
          placeholder="Fill with your name"
          id="name"
          nme="name"
        ></CustomInput>
      </FormGroup>
      <FormGroup>
        <CustomLabel htmlFor="email">Email</CustomLabel>
        <FormIcon>
          <FaEnvelope />
        </FormIcon>
        <CustomInput
          type="email"
          placeholder="Fill with your email"
          id="email"
          name="email"
        ></CustomInput>
      </FormGroup>
      <FormGroup>
        <StyledButton textColor="white" backColor={theme.colors.green}>
          Submit your message
        </StyledButton>
      </FormGroup>
    </CustomForm>
  );
}
