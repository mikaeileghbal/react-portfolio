import React from "react";
import styled from "styled-components";
import { BsFilePdf, BsPrinter } from "react-icons/bs";

import { Previous } from "../components";
import {
  ButtonWrap,
  Container,
  Divider,
  Section,
  SectionSubTitle,
  SectionTitle,
  StyledButton,
  Text,
} from "../styles/global";
import theme from "../styles/theme";

const Row = styled.div`
  display: flex;
  gap: 3em;
`;

const Column = styled.div``;

export default function Resume() {
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
        <ButtonWrap>
          <StyledButton
            textColor="white"
            backColor={theme.colors.green}
            style={{ padding: "0.8em 1.5em" }}
          >
            <BsPrinter size={22} />
            <span>print</span>
          </StyledButton>
          <StyledButton
            textColor="white"
            backColor={theme.colors.green}
            style={{ padding: "0.8em 1.5em" }}
          >
            <BsFilePdf size={22} />
            <span>pdf</span>
          </StyledButton>
        </ButtonWrap>
        <Row>
          <Column style={{ flex: "0 0 250px" }}>
            <SectionSubTitle>contact</SectionSubTitle>
            <Divider />
            <Text>
              <ul>
                <li>+989141840126</li>
                <li>mikaeileghbal@gmail.com</li>
                <li>linkedin.com/in/mikaeil-eghbal</li>
                <li>github.com/mikaeileghbal</li>
                <li>mikaeileghbal.github.io</li>
              </ul>
            </Text>
            <SectionSubTitle>skills</SectionSubTitle>
            <Divider />
            <Text>
              <ul>
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
              </ul>
            </Text>
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
            <Text>
              Front-End Developer, Freelance
              <br />
              Aug 2020 - Present // Iran
            </Text>
            <Text>
              Developed Interactive JavaScript applications. Wrote HTML code to
              structure pages. Used CSS with Sass to style fully responsive web
              pages. Developed Custom Web Components. Wrote code to fetch data
              from remote REST API. Created React.js and Next.js web
              applications. Used Context, Redux and Zustand to manage state.
              Implemented routing with React Router. Implemented CRUD operations
              on a MySQL and MongoDB database. Wrote styling code with
              Styled-Components and MUI.
            </Text>
            <SectionSubTitle>projects</SectionSubTitle>
            <Divider />
            <Text>
              Fixer
              <br />
              Next.js, MongoDB, Mongoose, Next_Auth, Styled Components
            </Text>
            <Text>
              A web application created with Next.js and MongoDB. In this
              project implemented CRUD operations on a MongoDB database using
              Mongoose. It includes authentication with Next-Auth.
              Styled-Components is the styling method.
            </Text>
            <Text>
              React MySQL
              <br />
              React.js, React Router, Context, Redux, Zustand, React Query,
              MySQL
            </Text>
            <Text>
              CRUD operations on a MySQL database using different methods and
              technologies. Implemented Context, Redux, React Query and Zustand
              to manage state.
            </Text>
            <Text>
              Music Store
              <br />
              React.js, React Router, Redux, SCSS
            </Text>
            <Text>
              An online music records shop created with React.js, React Router
              and Redux. Created more than 10 reusable components such as Cart,
              BasketView, AddToCart, SideMenu, Carousel and ...
            </Text>
            <Text>
              GitHub User Profile
              <br />
              React.js, Rest API, React-Chartjs-2
            </Text>
            <Text>
              A React.js application that shows how to fetch data from Rest API.
              react-chartjs-2 is used to create charts.
            </Text>
            <Text>
              My Portfolio
              <br />
              React.js, React Router, Styled Components
            </Text>
            <Text>
              A React.js application that shows My personal portfolio.
            </Text>
            <SectionSubTitle>education</SectionSubTitle>
            <Divider />
            <Text>Islamic Azad University - Bonab, Iran</Text>
            <Text>Bachelor's degree, Computer Software Engineering</Text>
            <Text>Shahid Bahonar University of Kerman - Kerman, Iran</Text>
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
