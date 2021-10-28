import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const ColorSpan = styled("span")({
  color: "pink"
});

const IndexPage = () => {
  return (
    <Layout>
      <h1>
        Hello, I&apos;m <ColorSpan>Gabriele Stefani</ColorSpan>
      </h1>
      <h2>I&apos;m a full-stack web developer.</h2>
    </Layout>
  );
};

export default IndexPage;
