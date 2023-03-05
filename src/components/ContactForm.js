import React, { useEffect, useState } from "react";
import { FaEnvelope, FaFile, FaUser } from "react-icons/fa";
import styled from "styled-components";
import {
  CustomInput,
  CustomLabel,
  CustomTextArea,
  FormGroup,
  StyledButton,
  Text,
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

  const [notify, setNotify] = useState("");
  const [isValid, setIsValid] = useState(false);

  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setNotify("");
  };

  const sendMessage = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .send("service_tiby54a", "template_0lvio71", fields, "Q5c0s3j1idF2o4AsP")
      .then(
        (result) => {
          if (result.status === 200) {
            setNotify("I recieved your kind message.");
          }

          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    const checkValidity = () => {
      let valid = true;
      const { user_name, user_email, message } = fields;
      console.log(user_name, user_email, message);

      if (user_name === "" || user_email === "" || message === "")
        valid = false;
      setIsValid(valid);
    };
    checkValidity();
  }, [fields]);

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
          autoComplete="off"
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
          autoComplete="off"
        ></CustomInput>
      </FormGroup>
      <FormGroup>
        <CustomLabel htmlFor="message">Message</CustomLabel>
        <FormIcon>
          <FaFile />
        </FormIcon>
        <CustomTextArea
          placeholder="Message"
          id="message"
          name="message"
          rows={5}
          onChange={handleInputChange}
          autoComplete="off"
        ></CustomTextArea>
      </FormGroup>

      <FormGroup>
        <StyledButton
          //disabled={isSending || isValid}
          disabled={!isValid || isSending}
          sending={isSending}
          textColor="white"
          backColor={theme.colors.green}
        >
          {isSending ? "wait for it..." : "Submit your message"}
        </StyledButton>
        {notify && <Text>{notify}</Text>}
      </FormGroup>
    </CustomForm>
  );
}
