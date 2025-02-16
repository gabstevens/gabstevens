import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Head from "./Head";

const MainContainer = styled("main")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  maxWidth: "1440px",
  marginLeft: "auto",
  marginRight: "auto",
  "@media (max-width: 1440px)": {
    maxWidth: "70%"
  },
  "@media (max-width: 600px)": {
    maxWidth: "100%",
    margin: 1
    // margin: "0 0.5rem"
  }
});

const OuterContainer = styled("div")({
  height: "100vh",
  width: "100vw",
});

const BackgroundContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  zIndex: -1
});

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <BackgroundContainer>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </BackgroundContainer>
      <OuterContainer>
        <MainContainer>
          {children}
          <Footer />
        </MainContainer>
      </OuterContainer>
    </>
  );
};

export default Layout;
