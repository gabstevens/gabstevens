import React from "react";
import styled from "styled-components";
import "../styles/global.scss";
import Head from "./Head";

const MainContainer = styled("main")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto 2rem",
  maxWidth: "1440px"
});

const OuterContainer = styled("div")({
  height: "100vh",
  width: "100vw",
  overflow: "auto"
});

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <OuterContainer>
        <MainContainer>{children}</MainContainer>
      </OuterContainer>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
    </>
  );
};

export default Layout;
