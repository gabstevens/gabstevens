"use client";
import styled from "styled-components";
const TEXT =
  "As a Software Engineer with deep expertise in frontend development, primarily using React, I'm passionate about building functional projects that are valuable to users. I enjoy bringing the entire project to life from concept to completion.";

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 1rem;
  text-align: justify;
`;

export default function AboutMe() {
  return <Paragraph>{TEXT}</Paragraph>;
}
