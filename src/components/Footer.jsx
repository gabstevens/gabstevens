import React from "react";
import styled from "styled-components";

const FooterContainer = styled("footer")({
  marginTop: "2rem",
  width: "calc(100vw - 2rem)",
  backgroundColor: "rgba(255,255,255,0.1)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(4px)",
  "-webkit-backdrop-filter": "blur(4px)",
  borderRadius: "2rem 2rem 0 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem"
});

const Footer = () => {
  return (
    <FooterContainer>
      <h1>Gabriele Stefani</h1>
      <span>&copy;2021</span>
    </FooterContainer>
  );
};

export default Footer;
