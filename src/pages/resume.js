import React from "react";
import { Previous } from "../components";
import {
  Container,
  Section,
  SectionSubTitle,
  SectionTitle,
  Text,
} from "../styles/global";

export default function Resume() {
  return (
    <Section>
      <Container>
        <SectionTitle style={{ marginTop: "1em" }}>mikaeil eghbal</SectionTitle>
        <SectionSubTitle>front-end web developer</SectionSubTitle>
        <Text>
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi, fill up the awesome form below or send an email to
        </Text>
        <SectionSubTitle>skills</SectionSubTitle>
        <Text>
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi, fill up the awesome form below or send an email to
        </Text>
        <SectionSubTitle>projects</SectionSubTitle>
        <Text>
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi, fill up the awesome form below or send an email to
        </Text>
        <SectionSubTitle>education</SectionSubTitle>
        <Text>
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi, fill up the awesome form below or send an email to
        </Text>
        <SectionSubTitle>interests</SectionSubTitle>
        <Text>
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi, fill up the awesome form below or send an email to
        </Text>
        <Previous to="/contact" show={true}>
          contact
        </Previous>
      </Container>
    </Section>
  );
}
