import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: white;
  color: ${({ theme }) => theme.palette.main.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MailTo = styled.a`
  text-decoration: underline;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <h1>Gabriele Stefani</h1>
      <MailTo href="mailto:gabristefani99@gmail.com?subject=I have an offer for you">
        gabristefani99@gmail.com
      </MailTo>
      <span>&copy;{year}</span>
    </FooterContainer>
  );
};

export default Footer;
