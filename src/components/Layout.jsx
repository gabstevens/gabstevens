import React from "react";
import styled from "styled-components";
import "../styles/global.css";
import Head from "./Head";

const MainContainer = styled("main")({
  margin: "2rem"
});

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default Layout;
