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
      <h2>Gabriele Stefani</h2>
      <MailTo
        href="mailto:gabristefani99@gmail.com?subject=I have an offer for you"
        title="Send mail to"
      >
        gabristefani99@gmail.com
      </MailTo>
      <span>&copy;{year}</span>
    </FooterContainer>
  );
};

export default Footer;
