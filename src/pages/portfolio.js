import React from "react";
import styled from "styled-components";
import {
  Container,
  Section,
  SectionTitle,
  StyledButton,
  TagButton,
  Text,
} from "../styles/global";

import theme from "../styles/theme";

const { colors } = theme;

const TagList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 1em;
  column-gap: 0.5em;
  margin-top: 1.3em;
  margin-bottom: 2em;
`;

const ItemTagList = styled(TagList)`
  row-gap: 0.5em;
`;

const ItemButtonList = styled(ItemTagList)`
  opacity: 0;
`;

const PortoContainer = styled.div`
  margin: 2em auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  row-gap: 2.6em;
  column-gap: 2.6em;
  counter-reset: slide-number;
`;

const PortoItem = styled.figure`
  height: 242px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${colors.blueLight};
  box-shadow: 8px 10px 0px rgba(2, 12, 27, 0.4),
    inset 8px 10px 10px rgba(2, 12, 27, 0.4);
  counter-increment: slide-number;
  transition: all 0.3s;

  &::before {
    display: none;
    content: counter(slide-number);
    position: absolute;
    left: 8px;
    top: -18px;
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.2);
    z-index: 2;
  }

  &:hover {
    //transform: translateY(-8px);
  }

  &:hover .item__header {
    transform: translateY(0px);
    opacity: 1;
    //background-color: rgba(10, 10, 10, 0.7);
  }
  &:hover .item__header > h3 {
    opacity: 0;
  }
  &:hover p {
    transform: translate(0, -28px);
  }
  &:hover .item__list {
    opacity: 1;
    transform: translateY(-20px);
    transition: transform 0.225s cubic-bezier(0.65, 1.55, 0.5, 1.3) 0.3s,
      opacity 0.1s ease-out 0.3s;
  }

  &:hover .item__image {
    //transform: scale(1.1);
  }

  .item__header {
    margin-top: 1em;
    width: 100%;
    height: 100%;
    padding: 1em;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(10, 10, 10, 0.8);
    opacity: 0;
    text-align: center;
    z-index: 2;
    transform: translateY(-100%);
    transform-style: flat;
    transition: opacity 0.15s ease-out,
      transform 0.25s cubic-bezier(0, 0.75, 0, 1);

    p {
      opacity: 0;
      margin: 2px 0em 10px;

      text-transform: capitalize;
      user-select: none;
      transform: translateY(0px);
      transition: opacity 0.3s $transition-func, transform 0.2s $transition-func;
    }
  }

  .item__image__wrapp {
    position: absolute;
    left: 0;
    top: 10%;
    width: 100%;
    height: 90%;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.75) inset;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      //background-color: red;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.75) inset;
      background-color: rgb(10, 10, 10, 0.2);
      background-blend-mode: luminosity;
    }
  }

  .item__image {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    opacity: 1;
    transition: 0.3s;
  }

  .tags,
  .links {
    list-style: none;
    justify-content: flex-start;
    align-items: center;
    opacity: 1;
    transform: translateY(0px);
  }
`;

const ItemTitle = styled.h3`
  color: ${colors.grayDark};
  background-color: aliceblue;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: -1px;
  text-transform: uppercase;
  text-align: center;
  user-select: none;
  padding: 0.4em 1em;
  z-index: 9;
`;

export default function Portfolio() {
  return (
    <Section>
      <Container>
        <SectionTitle>web developer portfolio</SectionTitle>
        <Text>
          From Html, CSS and Web Components to React.JS, Next.JS, Redux,
          Suztand, React Qury, MongoDB and MySQL. Check out my latest web
          software development portfolio projects.
        </Text>
        <div class="tags-container">
          <TagList>
            <li class="button tag__item">
              <TagButton active>show all</TagButton>
            </li>
            <li class="button tag__item">
              <TagButton>html</TagButton>
            </li>
            <li class="button tag__item">
              <TagButton>sass</TagButton>
            </li>
            <li class="button tag__item">
              <TagButton>javascript</TagButton>
            </li>
            <li class="button tag__item">
              <TagButton>reactjs</TagButton>
            </li>
            <li class="button tag__item">
              <TagButton>nextjs</TagButton>
            </li>
            <li class="button tag__item">
              <TagButton>redux</TagButton>
            </li>
            <li class="button tag__item">
              <TagButton>zustand</TagButton>
            </li>
            <li class="button tag__item">
              <TagButton>context</TagButton>
            </li>
            <li class="button tag__item">
              <TagButton>react router</TagButton>
            </li>
            <li class="button tag__item">
              <TagButton>react query</TagButton>
            </li>
            <li class="button tag__item">
              <TagButton>mongodb</TagButton>
            </li>
            <li class="button tag__item">
              <TagButton>mysql</TagButton>
            </li>
          </TagList>
        </div>
        <Text>
          Showing all projects. Use the filter to list them by skill or
          technology.
        </Text>
        <PortoContainer>
          <PortoItem>
            <div class="item__image__wrapp">
              <img
                id="image"
                class="item__image"
                src="./images/calendar.png"
                alt=""
              />
            </div>
            <ItemTitle>Calendar</ItemTitle>
            <figcaption class="item__header">
              <p id="desc" class="item__desc">
                Dynamic content manipulating with javascript. Get elements of
                document, create template and clone copy from template to create
                new elements.
              </p>
              <ItemTagList>
                <li>
                  <TagButton>html</TagButton>
                </li>
                <li>
                  <TagButton>css</TagButton>
                </li>
                <li>
                  <TagButton>javascript</TagButton>
                </li>
              </ItemTagList>
              {/* <ItemButtonList className="item__list">
                <li>
                  <StyledButton backColor={colors.greenHover}>
                    live
                  </StyledButton>
                </li>
                <li>
                  <StyledButton backColor={colors.greenHover}>
                    github
                  </StyledButton>
                </li>
              </ItemButtonList> */}
            </figcaption>
          </PortoItem>
          <PortoItem>
            <div class="item__image__wrapp">
              <img
                id="image"
                class="item__image"
                src="./images/calendar.png"
                alt=""
              />
            </div>
            <ItemTitle>Calendar</ItemTitle>
            <figcaption class="item__header">
              <p id="desc" class="item__desc">
                Dynamic content manipulating with javascript. Get elements of
                document, create template and clone copy from template to create
                new elements.
              </p>
              <ItemTagList>
                <li>
                  <TagButton>html</TagButton>
                </li>
                <li>
                  <TagButton>css</TagButton>
                </li>
                <li>
                  <TagButton>javascript</TagButton>
                </li>
              </ItemTagList>
              {/* <ItemButtonList className="item__list">
                <li>
                  <StyledButton backColor={colors.greenHover}>
                    live
                  </StyledButton>
                </li>
                <li>
                  <StyledButton backColor={colors.greenHover}>
                    github
                  </StyledButton>
                </li>
              </ItemButtonList> */}
            </figcaption>
          </PortoItem>
        </PortoContainer>
      </Container>
    </Section>
  );
}
