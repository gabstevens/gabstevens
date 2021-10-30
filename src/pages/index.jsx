import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const ColorSpan = styled("span")({
  color: "#e947e3"
});

const TitleContainer = styled("div")({
  height: "calc(100vh - 2rem)",
  width: "calc(100vw - 4rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "2rem"
});

const TitleHeading = styled("h1")({
  textAlign: "center"
});

const Paragraph = styled("p")({
  textAlign: "center"
});

const IndexPage = () => {
  return (
    <Layout>
      <TitleContainer>
        <TitleHeading>
          Hello, I&apos;m <ColorSpan>Gabriele Stefani</ColorSpan>.
          <br />
          I&apos;m a software developer.
        </TitleHeading>
      </TitleContainer>
      <h2>ABOUT ME</h2>
      <Paragraph>
        I&apos;m a 22 years old software developer with a Bachelor Degree in Software Engineering
        graduated from the Univesità degli Studi di Firenze (Florence).
      </Paragraph>
    </Layout>
  );
};

export default IndexPage;
