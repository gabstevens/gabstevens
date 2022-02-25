import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import "../styles/global.scss";
import theme from "../theme.json";
import Footer from "./Footer";
import Head from "./Head";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 100%;
  font-family: "Poppins", sans-serif;
}

body {
  margin: 0;
  font-size: 125%;
  color: white;
  background: ${({ theme }) =>
    `radial-gradient(ellipse at bottom,  ${theme.palette.main.from} 0%, ${theme.palette.main.to} 100%)`};
  // @media (max-width: 600px) {
  //   font-size: 75%;
  // }
}

button {
  font-family: "Poppins", sans-serif;
}

a {
  text-decoration: none;
}
`;

const MainContainer = styled.main`
  width: 100%;
`;

const OuterContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;
`;

const BackgroundContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100%",
  overflow: "hidden",
  zIndex: -1
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head />
      <GlobalStyle />
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
    </ThemeProvider>
  );
};

export default Layout;
