import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
// import profileImg from "../assets/profile_image.jpg";
// import GenericSkills from "../components/GenericSkills";
import Layout from "../components/Layout";
// import SkillChart from "../components/SkillChart";
import Image from "next/image";
import Rocket from "../components/Rocket";
import Planet from "../components/Planet";

const ColorSpan = styled.span({
  color: "rgb(255, 156, 0)"
});

const TitleContainer = styled.section({
  position: "relative",
  height: "calc(100vh - 2rem)",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "2rem"
});

const Section = styled.section({
  width: "100%",
  padding: "0 1rem",
  margin: "auto",
  maxWidth: "1440px",
  "@media (max-width: 600px)": {
    maxWidth: "100%"
  },
});

const TitleHeading = styled.h1({
  textAlign: "center"
});

const SectionTitle = styled.h2({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textTransform: "uppercase"
});

const Paragraph = styled.p({
  textAlign: "justify",
  fontSize: "1rem",
  lineHeight: "1.7",
  letterSpacing: "0.3px",
  margin: 0,
  padding: "1.5rem",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)"
});

const ParagraphWithImage = styled.div({
  width: "100%",
  display: "flex",
  gap: "1rem",
  
  marginBottom: "24rem",
  "@media (max-width: 600px)": {
    marginBottom: "2rem"
  },
  "&:last-child": {
    marginBottom: 0
  },
});

const Divider = styled.span({
  marginTop: "0.3rem",
  width: "65%",
  borderBottom: "0.2rem solid white"
});

const ProfileImageContainer = styled.div({
  width: "16rem",
  height: "16rem",
  borderRadius: "1rem",
  overflow: "hidden"
});
const ProfileImage = styled.img({
  width: "16rem",
  height: "16rem"
});

const IndexPage = () => {
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

  const titleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (titleRef.current !== null) {
      titleRef.current.scrollIntoView();
    }
  }, [titleRef.current]);

  return (
    <Layout>
      <TitleContainer ref={titleRef}>
        <TitleHeading>
          I'm a Software Engineer.
          <br />
          {greetingsList.map(greeting => (
            <span key={greeting} className="word-rotate-animation">
              {greeting} <ColorSpan>Gabriele Stefani</ColorSpan>.
            </span>
          ))}
        </TitleHeading>
      </TitleContainer>
      <Section>
        <SectionTitle>
          About me
          <Divider />
        </SectionTitle>
        <ParagraphWithImage>
          <Planet src="/planet.png" />
          <Paragraph>
            I'm a software engineer passionate about building high-quality, user-focused web
            applications. My expertise lies in front-end development with React, where I thrive on
            creating engaging and performant user interfaces. I'm driven by the challenge of
            transforming ideas into reality through clean, efficient, and maintainable code.
          </Paragraph>
        </ParagraphWithImage>
        <ParagraphWithImage>
          <Paragraph>
            My background includes professional experience building backends with Ruby on Rails,
            giving me a solid understanding of server-side logic and application architecture. I'm
            comfortable working across the full stack and enjoy the collaborative process of
            developing complete applications. I've also explored Java and Python for personal
            projects, further broadening my development perspective.
          </Paragraph>
          <Planet src="/grass-planet.png" />
        </ParagraphWithImage>
        <ParagraphWithImage>
          <Planet src="/planet.png" />
          <Paragraph>
            I'm eager to contribute to impactful projects where I can leverage my skills and
            continue to learn and grow. I thrive in collaborative environments and am passionate
            about staying up-to-date with the latest technologies. I believe in writing
            high-quality, testable code and am always striving to improve my craft.
          </Paragraph>
        </ParagraphWithImage>
      </Section>
      <Rocket />
    </Layout>
  );
};

export default IndexPage;
