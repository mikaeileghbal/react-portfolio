import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Dot,
  Section,
  SectionTitle,
  TagButton,
  Text,
  TextSmall,
} from "../styles/global";

import theme from "../styles/theme";
import { tags, portfolio } from "../data/portfolio";
import { Footer } from "../components";

const { colors } = theme;

const StyledItem = styled.li`
  a {
    text-decoration: none;
  }
`;

const TagList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 1em;
  column-gap: 0.4em;
  margin-top: 1.3em;
  margin-bottom: 1.5em;
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
  margin: 1.2em auto;
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
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  &:hover .item__header > h3 {
    opacity: 0;
  }
  &:hover p {
    transform: translate3d(0, -28px, 0);
  }
  &:hover {
    .item__tag {
      transform: translate3d(0, 0, 0);
      opacity: 1;
      transition: opacity 0.1s ease-out,
        transform 0.285s cubic-bezier(0.5, 1.5, 0.5, 1.5);

      &:nth-child(1) {
        transition-delay: 0.45s;
      }
      &:nth-child(2) {
        transition-delay: 0.49s;
      }
      &:nth-child(3) {
        transition-delay: 0.53s;
      }
      &:nth-child(4) {
        transition-delay: 0.57s;
      }
      &:nth-child(5) {
        transition-delay: 0.61s;
      }
      &:nth-child(6) {
        transition-delay: 0.65s;
      }
      &:nth-child(7) {
        transition-delay: 0.69s;
      }
      &:nth-child(8) {
        transition-delay: 0.73s;
      }
      &:nth-child(9) {
        transition-delay: 0.77s;
      }
      &:nth-child(10) {
        transition-delay: 0.92s;
      }
    }
  }

  &:hover .item__list {
  }

  &:hover .item__image {
    //transform: scale(1.1);
  }

  .item__header {
    position: absolute;
    margin-top: 1em;
    width: 100%;
    height: 94%;
    padding: 1em 3em;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    text-align: center;
    z-index: 3;
    transform: translate3d(0, -100%, 0);
    //transform-style: flat;
    transition: opacity 0.15s ease-out,
      transform 0.25s cubic-bezier(0, 0.75, 0, 1);

    background-image: url(/images/${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(10, 10, 10, 0.7);
      background-blend-mode: luminosity;
    }

    p {
      opacity: 0;
      margin: 2px 0em 10px;

      text-transform: capitalize;
      user-select: none;
      transform: translate3d(0, 0, 0);
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
      background-color: rgb(10, 10, 10, 0);
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
    transform: translate3d(0, 0, 0);
  }
  .item__list {
  }

  .item__tag {
    opacity: 0.2;
    transform: translate3d(0, -10px, 0);
  }
`;

const ItemHeader = styled.div`
  position: relative;
  background-color: aliceblue;
  top: 0;
  left: 0;
  padding: 0.25em 0.5em;
  height: 24px;
  width: 100%;
  z-index: 9;
`;

const ItemTitle = styled.h3`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: transparent;
  color: ${colors.grayDark};
  font-weight: 700;
  font-size: 12px;
  letter-spacing: -1px;
  text-transform: uppercase;
  text-align: center;
  user-select: none;
  line-height: 2;
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
                key={tag}
                active={tag === currentTag}
                onSelect={handleTagSelection}
              >
                {tag}
              </TagItem>
            ))}
          </TagList>
        </div>
        <TextSmall>
          Showing all projects. Use the filter to list them by skill or
          technology.
        </TextSmall>
        <PortoContainer>
          {portfolio.map((item) => (
            <PortfoItem key={item.id} item={item} />
          ))}
        </PortoContainer>
        <Footer />
        {/* <Next to="/contact">conatct</Next>
        <Previous to="/">about</Previous> */}
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
  const { title, image, tags, image2 } = item;
  return (
    <StyledItem>
      <a href={`/portfolio/${title.replace(/\s/g, "-")}`}>
        <PortoItem image={image2}>
          <div class="item__image__wrapp">
            <img
              id="image"
              class="item__image"
              src={`./images/${image}`}
              alt={image}
            />
          </div>
          <ItemHeader>
            <Dot backColor="#ff5f57" />
            <Dot backColor="#ffbd2e" />
            <Dot backColor="#28ca41" />
            <ItemTitle>{title}</ItemTitle>
          </ItemHeader>
          <figcaption class="item__header">
            <ItemTagList className="item__list">
              {tags.map((tag, i) => (
                <li
                  className="item__tag"
                  key={tag}
                  // style={{
                  //   transitionDelay: `${0.45 + i / 30}s`,
                  // }}
                >
                  <TagButton>{tag}</TagButton>
                </li>
              ))}
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
    </StyledItem>
  );
}
