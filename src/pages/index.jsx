import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Section from "../components/Section";
import AboutMeSection from "../components/sections/AboutMeSection";
import ContactsSection from "../components/sections/ContactsSection";
import GreetingsSection from "../components/sections/GreetingsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";

const WipParagraph = styled.p`
  margin: 0 2rem;
  text-align: justify;
`;

const IndexPage = () => {
  return (
    <Layout>
      <GreetingsSection />
      <Section name="wip" title="Work in Progress" transparent>
        <WipParagraph>
          The website is under development, this is a preview and can change at any time. I
          apologize in advance for any inconvenience this may cause.
        </WipParagraph>
      </Section>
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
    </Layout>
  );
};

export default IndexPage;
