"use client";
import styled from "styled-components";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

const Container = styled.div`
  background: radial-gradient(ellipse at bottom, rgb(26, 46, 116) 0%, rgb(9, 30, 52) 100%);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export default function Page() {
  return (
    <Container>
      <Main>
        <Hero />
        <AboutMe />
      </Main>
      <Footer />
    </Container>
  );
}
