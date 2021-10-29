import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const ColorSpan = styled("span")({
  color: "#e947e3"
});

const ColorHeading = styled("h1")({
  color: "#efefef"
});

const IndexPage = () => {
  return (
    <Layout>
      <ColorHeading>
        Hello, I&apos;m <ColorSpan>Gabriele Stefani</ColorSpan>.
        <br />
        I&apos;m a full-stack web developer.
      </ColorHeading>
    </Layout>
  );
};

export default IndexPage;
