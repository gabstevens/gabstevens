import React, { useState } from "react";
import styled from "styled-components";
import Section from "../Section";

const ColorSpan = styled.span`
  color: ${({ theme }) => theme.palette.main.primary};
`;

const TitleContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleHeading = styled.h1`
  text-align: center;
`;

const GreetingsSection = () => {
  const [greetingsList] = useState([
    "Ciao, io sono",
    // "안녕하세요, 이것은",
    "Hola, yo soy",
    // "こんにちは、これは",
    "Bonjour, je suis",
    "Hallo, ich bin",
    "Hello, I'm"
    // "Olá, eu sou",
    // "你好，我是"
  ]);
  return (
    <Section name="greetings" transparent>
      <TitleContainer>
        <TitleHeading className="slidingVertical">
          I&apos;m a software developer
          <br />
          {greetingsList.map(greeting => (
            <span key={greeting} className="word_rotate">
              {greeting}&nbsp;<ColorSpan>Gabriele Stefani</ColorSpan>
            </span>
          ))}
        </TitleHeading>
      </TitleContainer>
    </Section>
  );
};

export default GreetingsSection;
