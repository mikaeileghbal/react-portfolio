import React from "react";
import styled from "styled-components";
import { CustomLink, Space, Text } from "../styles/global";

const FooterWrap = styled.div`
  text-align: center;
  margin-top: 4em;
`;

const BoldText = styled.h4`
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 0;
  margin-bottom: 0.5em;
`;

const CustomLinkFooter = styled(CustomLink)`
  font-weight: 700;
  line-height: 1.6;
`;

const FooterText = styled(Text)`
  line-height: 1.65;
  font-weight: 400;
  font-size: 15px;
`;

export default function Footer() {
  return (
    <FooterWrap>
      <BoldText>Let's talk</BoldText>
      <FooterText>
        Wanna get in touch or talk about a project?
        <br />
        Feel free to contact me via email at
        <Space>
          <CustomLinkFooter
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:mikaeileghbal@gmail.com";
            }}
          >
            mikaeileghbal@gmail.com
          </CustomLinkFooter>
        </Space>
        <br />
        or drop a line in the form at the
        <Space>
          <CustomLinkFooter href="/contact">contact page</CustomLinkFooter>
        </Space>
      </FooterText>
    </FooterWrap>
  );
}
