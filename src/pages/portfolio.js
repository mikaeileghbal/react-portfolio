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
  row-gap: 0.5em;
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
              <TagButton>show all</TagButton>
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
        <p class="filter-status text">
          Showing all projects. Use the filter to list them by skill or
          technology.
        </p>
        <div class="project__container"></div>
      </Container>
    </Section>
  );
}
