import React from "react";
import styled from "styled-components";
import {
  Container,
  Section,
  SectionTitle,
  TagButton,
  Text,
} from "../styles/global";

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
        <div class="project__container">
          <figure class="item">
            <div class="item__image__wrapp">
              <img
                id="image"
                class="item__image"
                src="./images/calendar.png"
                alt=""
              />
            </div>
            <h3 id="title" class="item__title">
              Calendar
            </h3>
            <figcaption class="item__header">
              <p id="desc" class="item__desc">
                Dynamic content manipulating with javascript. Get elements of
                document, create template and clone copy from template to create
                new elements.
              </p>
              <ul class="tags" id="tags">
                <li>html</li>
                <li>css</li>
                <li>javascript</li>
              </ul>
              <ul class="item__list--links" id="viewlinks">
                <li>
                  <a href="#">live</a>
                </li>
                <li>
                  <a href="#">githup</a>
                </li>
              </ul>
            </figcaption>
          </figure>
          <figure class="item">
            <div class="item__image__wrapp">
              <img
                id="image"
                class="item__image"
                src="./images/calendar.png"
                alt=""
              />
            </div>
            <h3 id="title" class="item__title">
              Calendar
            </h3>
            <figcaption class="item__header">
              <p id="desc" class="item__desc">
                Dynamic content manipulating with javascript. Get elements of
                document, create template and clone copy from template to create
                new elements.
              </p>
              <ul class="tags" id="tags">
                <li>html</li>
                <li>css</li>
                <li>javascript</li>
              </ul>
              <ul class="item__list--links" id="viewlinks">
                <li>
                  <a href="#">live</a>
                </li>
                <li>
                  <a href="#">githup</a>
                </li>
              </ul>
            </figcaption>
          </figure>
        </div>
      </Container>
    </Section>
  );
}
