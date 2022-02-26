import React, { useState } from "react";
import styled from "styled-components";
import curriculumVitae from "../../assets/GabrieleStefaniCVen.pdf";
import CurriculuVitaeIcon from "../../assets/icons/curriculum-vitae-icon.svg";
import EmailIcon from "../../assets/icons/email-icon.svg";
import GithubIcon from "../../assets/icons/github-icon.svg";
import LinkedinIcon from "../../assets/icons/linkedin-icon.svg";
import Section from "../Section";

const ContactToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // & > *:not(:last-child) {
  //   margin-right: 1rem;
  // }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  flex: 256px 0 1;
  border: none;
  background: #5286ff;
  box-shadow: 4px 4px 16px black;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  background-position: center;
  transition: background 0.4s ease-in;
  margin: 0.75rem 1rem;
  & > *:not(:last-child) {
    width: 2rem;
    height: 2rem;
    filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.2));
    path {
      stroke: #efefef;
      fill: #efefef;
    }
    margin-right: 1rem;
  }
  &:hover {
    background: #3370ff radial-gradient(circle, transparent 1%, #3370ff 1%) center/15000%;
  }
  &:active {
    background-color: #0040d6;
    background-size: 100%;
    transition: background 0s;
  }
`;

const ContactsSection = () => {
  const [contactButtons] = useState([
    { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/gabrielestefani/" },
    { Icon: GithubIcon, label: "GitHub", href: "https://github.com/GabryHawk" },
    {
      Icon: CurriculuVitaeIcon,
      label: "Curriculum Vitae",
      href: curriculumVitae,
      download: "GabrieleStefaniCVen.pdf"
    }
  ]);
  return (
    <Section name="contacts" title="Contacts" transparent>
      <ContactToolbar>
        <ContactLink href="mailto:gabristefani99@gmail.com?subject=I have an offer for you">
          <EmailIcon />
          <span>Email Me</span>
        </ContactLink>
      </ContactToolbar>
      <ContactToolbar>
        {contactButtons.map(({ Icon, label, href, download }) => (
          <ContactLink key={label} href={href} download={download}>
            <Icon />
            <span>{label}</span>
          </ContactLink>
        ))}
      </ContactToolbar>
    </Section>
  );
};

export default ContactsSection;
