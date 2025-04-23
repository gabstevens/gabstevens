import Image from "next/image";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer({
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.1)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(4px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem 0rem"
});

const currentYear = new Date().getFullYear();

const Footer = () => <FooterContainer><Image src="/planet-surface.png" width="200" height="100" />© {currentYear} Gabriele Stefani</FooterContainer>;

export default Footer;
