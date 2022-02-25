import React from "react";
import styled from "styled-components";
import projects from "../../assets/projects.json";
import Section from "../Section";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
`;

const ProjectTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:after {
    content: "";
    width: 65%;
    border-bottom: 0.2rem solid ${({ theme }) => theme.palette.main.secondary};
  }
`;

const ProjectDescription = styled.p``;

const ProjectsSection = () => {
  return (
    <Section name="projects" title="Projects">
      {projects.map(({ title, description, images }) => (
        <ProjectContainer key={title}>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
          {images.map((img, index) => (
            <img key={img} src={img} alt={`${title} - ${index}`} />
          ))}
        </ProjectContainer>
      ))}
    </Section>
  );
};

export default ProjectsSection;
