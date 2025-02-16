import React, { useState } from "react";
import styled from "styled-components";
import profileImg from "../assets/profile_image.jpg";
import GenericSkills from "../components/GenericSkills";
import Layout from "../components/Layout";
import SkillChart from "../components/SkillChart";

const ColorSpan = styled("span")({
  color: "rgb(255, 156, 0)"
});

const TitleContainer = styled("div")({
  position: "relative",
  height: "calc(100vh - 2rem)",
  width: "calc(100vw - 4rem)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "2rem"
});

const TitleHeading = styled("h1")({
  textAlign: "center"
});

const SectionTitle = styled("h2")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const Paragraph = styled("p")({
  textAlign: "center"
});

const Divider = styled("div")({
  marginTop: "0.3rem",
  width: "65%",
  borderBottom: "0.2rem solid white"
});

const ProfileImageContainer = styled("div")({
  width: "16rem",
  height: "16rem",
  borderRadius: "1rem",
  overflow: "hidden"
});
const ProfileImage = styled("img")({
  width: "16rem",
  height: "16rem"
});

const IndexPage = () => {
  const [brithdate] = useState(new Date("31 Oct 1999 00:00:00 GMT+2"));
  const diffDate = new Date(Date.now() - brithdate);
  const myAge = Math.abs(diffDate.getUTCFullYear() - 1970);

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
    <Layout>
      <TitleContainer>
        <TitleHeading className="slidingVertical">
          I&apos;m a software developer.
          <br />
          {greetingsList.map(greeting => (
            <span key={greeting} className="word_rotate">
              {greeting}&nbsp;<ColorSpan>Gabriele Stefani</ColorSpan>.
            </span>
          ))}
        </TitleHeading>
      </TitleContainer>
      {/* <SectionTitle>
        WORK IN PROGRESS
        <Divider />
      </SectionTitle>
      <Paragraph>
        The website is under development, this is a preview and can change at any time. I apologize
        in advance for any inconvenience this may cause.
      </Paragraph>
      <SectionTitle>
        ABOUT ME
        <Divider />
      </SectionTitle>
      <ProfileImageContainer>
        <ProfileImage src={profileImg} alt="Gabriele Stefani" />
      </ProfileImageContainer>
      <Paragraph>
        I&apos;m a {myAge} years old software developer with a Bachelor Degree in Software
        Engineering graduated from the Univesità degli Studi di Firenze (Florence).
      </Paragraph>
      <SectionTitle>
        CODING KNOWLEDGE
        <Divider />
      </SectionTitle>
      <SkillChart />
      <SectionTitle>
        SKILLS
        <Divider />
      </SectionTitle>
      <GenericSkills /> */}
    </Layout>
  );
};

export default IndexPage;
