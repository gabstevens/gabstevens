import React from "react";
import styled from "styled-components";

const FooterContainer = styled("footer")({
  width: "calc(100vw - 2rem)",
  backgroundColor: "rgba(255,255,255,0.1)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(4px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem"
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <span>© {currentYear} Gabriele Stefani</span>
    </FooterContainer>
  );
};

export default Footer;
