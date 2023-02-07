import React, { useState } from "react";
import { FaEnvelope, FaFile, FaUser } from "react-icons/fa";
import styled from "styled-components";
import {
  CustomInput,
  CustomLabel,
  FormGroup,
  StyledButton,
} from "../styles/global";
import theme from "../styles/theme";
import emailjs from "@emailjs/browser";

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
  const [fields, setFields] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(fields);
    emailjs
      .send("service_tiby54a", "template_0lvio71", fields, "Q5c0s3j1idF2o4AsP")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <CustomForm onSubmit={sendMessage}>
      <FormGroup>
        <CustomLabel htmlFor="name">Fill with your name</CustomLabel>
        <FormIcon>
          <FaUser />
        </FormIcon>
        <CustomInput
          type="text"
          placeholder="Fill with your name"
          id="name"
          name="user_name"
          onChange={handleInputChange}
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
          name="user_email"
          onChange={handleInputChange}
        ></CustomInput>
      </FormGroup>
      <FormGroup>
        <CustomLabel htmlFor="message">Message</CustomLabel>
        <FormIcon>
          <FaFile />
        </FormIcon>
        <CustomInput
          type="text"
          placeholder="Message"
          id="message"
          name="user_message"
          onChange={handleInputChange}
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
