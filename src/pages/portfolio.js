import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Section,
  SectionTitle,
  TagButton,
  Text,
} from "../styles/global";

import theme from "../styles/theme";
import { tags, portfolio } from "../data/portfolio";
import { Next, Previous } from "../components";

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
  z-index: 4;
`;

const ItemTagList = styled(TagList)`
  row-gap: 0.5em;
  justify-content: center;
`;

const ItemButtonList = styled(ItemTagList)`
  opacity: 0;
`;

const PortoContainer = styled.ul`
  list-style: none;
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

  &:hover .item__header {
    transform: translateY(0px);
    opacity: 1;
  }
  &:hover .item__header > h3 {
    opacity: 0;
  }
  &:hover p {
    transform: translate(0, -28px);
  }
  &:hover .item__list {
    opacity: 1;
    transform: translateY(0px);
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
    padding: 1em 3em;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    text-align: center;
    z-index: 3;
    transform: translateY(-120%);
    transform-style: flat;
    transition: opacity 0.15s ease-out,
      transform 0.25s cubic-bezier(0, 0.75, 0, 1);

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url(/images/${(props) => props.image});
      background-color: rgba(10, 10, 10, 0.7);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-blend-mode: hue;
      z-index: 4;
    }

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
  .item__list {
    opacity: 0;
    transform: translateY(-20px);
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
  const [currentTag, setCurrentTag] = useState("show all");

  const handleTagSelection = (tag) => {
    console.log(tag);
    setCurrentTag(tag);
  };

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
            {tags.map((tag, i) => (
              <TagItem
                key={i}
                active={tag === currentTag}
                onSelect={handleTagSelection}
              >
                {tag}
              </TagItem>
            ))}
          </TagList>
        </div>
        <Text>
          Showing all projects. Use the filter to list them by skill or
          technology.
        </Text>
        <PortoContainer>
          {portfolio.map((item) => (
            <PortfoItem key={item.key} item={item} />
          ))}
        </PortoContainer>
        <Next to="/contact">conatct</Next>
        <Previous to="/">about</Previous>
      </Container>
    </Section>
  );
}

function TagItem({ children, active, onSelect }) {
  return (
    <li class="button tag__item">
      <TagButton active={active} onClick={() => onSelect(children)}>
        {children}
      </TagButton>
    </li>
  );
}

function PortfoItem({ item }) {
  const { title, image, tags } = item;
  return (
    <li>
      <a href="#">
        <PortoItem image={image}>
          <div class="item__image__wrapp">
            <img
              id="image"
              class="item__image"
              src={`./images/${image}`}
              alt={image}
            />
          </div>
          <ItemTitle>{title}</ItemTitle>
          <figcaption class="item__header">
            <ItemTagList className="item__list">
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
      </a>
    </li>
  );
}
