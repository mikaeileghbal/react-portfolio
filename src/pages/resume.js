import React from "react";
import styled from "styled-components";
import { BsFilePdf, BsPrinter } from "react-icons/bs";

import { Previous } from "../components";
import {
  ButtonWrap,
  Container,
  CustomLink,
  Divider,
  Section,
  SectionSubTitle,
  SectionTitle,
  StyledButton,
  SubTitle,
  SubTitleMinor,
  Text,
  UList,
} from "../styles/global";
import theme from "../styles/theme";

const Row = styled.div`
  display: flex;
  gap: 1.5em;
`;

const Column = styled.div``;

const ResumeButtonWrap = styled(ButtonWrap)`
  @media only print {
    display: none;
  }
`;

export default function Resume() {
  const openPDF = () => {
    window.open("mikaeil-eghbal-resume.pdf", "_blank");
  };

  return (
    <Section>
      <Container>
        <SectionTitle style={{ marginTop: "1em" }}>Mikaeil Eghbal</SectionTitle>
        <SectionSubTitle style={{ marginTop: "0" }}>
          front-end web developer
        </SectionSubTitle>
        <Text>
          I'm a Frontend Web Developer working for more than 2 years. I like
          working with data specially interacting with databases such as MySQL
          and MongoDB.
        </Text>
        <ResumeButtonWrap>
          <StyledButton
            onClick={() => window.print()}
            textColor="white"
            backColor={theme.colors.green}
            style={{ padding: "0.8em 1.5em" }}
          >
            <BsPrinter size={22} />
            <span>print</span>
          </StyledButton>
          <StyledButton
            onClick={openPDF}
            textColor="white"
            backColor={theme.colors.green}
            style={{ padding: "0.8em 1.5em" }}
          >
            <BsFilePdf size={22} />
            <span>pdf</span>
          </StyledButton>
        </ResumeButtonWrap>
        <Row>
          <Column style={{ flex: "0 0 290px" }}>
            <SectionSubTitle>contact</SectionSubTitle>
            <Divider />

            <UList>
              <li>+989141840126</li>
              <li>
                <CustomLink
                  href="mailto:mikaeileghbal@gmail.com"
                  target="_blank"
                >
                  mikaeileghbal@gmail.com
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  href="https://linkedin.com/in/mikaeil-eghbal"
                  target="_blank"
                >
                  linkedin.com/in/mikaeil-eghbal
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  href="https://github.com/mikaeileghbal"
                  target="_blank"
                >
                  github.com/mikaeileghbal
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  href="https://mikaeileghbal.github.io"
                  target="_black"
                >
                  mikaeileghbal.github.io
                </CustomLink>
              </li>
            </UList>

            <SectionSubTitle>skills</SectionSubTitle>
            <Divider />

            <UList>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>React Query</li>
              <li>Material UI</li>
              <li>Styled Components</li>
              <li>JavaScript/ES6</li>
              <li>CSS3/SCSS</li>
              <li>HTML5</li>
              <li>Git/GitHub</li>
            </UList>

            <SectionSubTitle>languages</SectionSubTitle>
            <Divider />
            <Text>English . Turkish . Persian . Deutsch</Text>
            <SectionSubTitle>interests</SectionSubTitle>
            <Divider />
            <Text>Music . Novel . Swimming . Cycling</Text>
          </Column>
          <Column>
            <SectionSubTitle>experience</SectionSubTitle>
            <Divider />
            <SubTitle>Front-End Developer, Freelance</SubTitle>
            <SubTitleMinor>Aug 2020 - Present</SubTitleMinor>
            <Text>
              Developed Interactive JavaScript applications. Used CSS with Sass
              to style fully responsive web pages. Developed Custom Web
              Components. Wrote code to fetch data from remote REST API. Created
              React.js and Next.js web applications. Used Context, Redux and
              Zustand to manage state. Implemented routing with React Router.
              Implemented CRUD operations on a MySQL and MongoDB database. Wrote
              styling code with Styled-Components and MUI.
            </Text>
            <SectionSubTitle>projects</SectionSubTitle>
            <Divider />
            <SubTitle>Fixer</SubTitle>
            <SubTitleMinor>
              Next.js, MongoDB, Mongoose, Next_Auth, Styled Components
            </SubTitleMinor>
            <Text>
              A web application created with Next.js and MongoDB. In this
              project implemented CRUD operations on a MongoDB database using
              Mongoose. It includes authentication with Next-Auth.
              Styled-Components is the styling method.
            </Text>
            <SubTitle>React MySQL</SubTitle>
            <SubTitleMinor>
              React.js, React Router, Context, Redux, Zustand, React Query,
              MySQL
            </SubTitleMinor>
            <Text>
              CRUD operations on a MySQL database using different methods and
              technologies. Implemented Context, Redux, React Query and Zustand
              to manage state.
            </Text>
            <SubTitle>Music Store</SubTitle>
            <SubTitleMinor>React.js, React Router, Redux, SCSS</SubTitleMinor>
            <Text>
              An online music records shop created with React.js, React Router
              and Redux. Created more than 10 reusable components such as Cart,
              BasketView, AddToCart, SideMenu, Carousel.
            </Text>
            <SubTitle>GitHub User Profile</SubTitle>
            <SubTitleMinor>React.js, Rest API, React-Chartjs-2</SubTitleMinor>
            <Text>
              A React.js application that shows how to fetch data from Rest API.
              react-chartjs-2 is used to create charts.
            </Text>
            <SubTitle>My Portfolio</SubTitle>
            <SubTitleMinor>
              React.js, React Router, Styled Components
            </SubTitleMinor>
            <Text>
              A React.js application that shows My personal portfolio.
            </Text>
            <SectionSubTitle>education</SectionSubTitle>
            <Divider />
            <SubTitle>Islamic Azad University - Bonab, Iran</SubTitle>
            <Text>Bachelor's degree, Computer Software Engineering</Text>
            <SubTitle>
              Shahid Bahonar University of Kerman - Kerman, Iran
            </SubTitle>
            <Text>
              Associate's degree, Computer Software Technology/Technicia
            </Text>
          </Column>
        </Row>
        <Previous to="/contact" show={true}>
          contact
        </Previous>
      </Container>
    </Section>
  );
}
