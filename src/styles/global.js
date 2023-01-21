import styled from "styled-components";

export const Container = styled.section`
  max-width: $container-max-width;
  margin: 0 auto;
`;

export const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 5em 20px;
`;

export const Title = styled.h1`
  position: relative;
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 0.2em;
`;

export const Text = styled.p`
  color: $gray-dark;
  max-width: 800px;
  font-weight: 400;
  font-size: 16px;
  margin: 0 auto;
  opacity: 0;
  line-height: 1.6;
  margin-top: 8px;
`;
