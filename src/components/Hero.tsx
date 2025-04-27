import styled, { keyframes } from "styled-components";

const greetingList = [
  "Ciao, io sono",
  "Hola, yo soy",
  "Bonjour, je suis",
  "Hallo, ich bin",
  "Hello, I'm"
] as const;

const rotateSentence = keyframes`
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    transform: translateY(-50px);
  }
  10% {
    opacity: 1;
    transform: translateY(0px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px);
  }
  30% {
    opacity: 0;
    transform: translateY(50px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.section`
  width: 100%;
`;

type RotatingLineProps = {
  $index: number;
};

const RotatingLine = styled.span<RotatingLineProps>`
  animation: ${rotateSentence} 12.5s linear infinite 0s;
  position: absolute;
  display: inline-block;
  opacity: 0;
  left: 0;
  right: 0;

  animation-delay: ${({ $index }) => $index * 2.5}s;
`;

const Heading = styled.h1`
  position: relative;
  width: 100%;
  text-align: center;
  line-height: 3;
`;

const Highlight = styled.span`
  color: rgb(255, 156, 0);
`;

const Hero = () => {
  return (
    <Container>
      <Heading>
        {greetingList.map((greeting, index) => (
          <RotatingLine key={greeting} $index={index}>
            {greeting} <Highlight>Gabriele Stefani</Highlight>.
          </RotatingLine>
        ))}
        <br />
        I'm a Software Engineer.
      </Heading>
    </Container>
  );
};

export default Hero;
