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
  margin-right: 1rem;
  &:after {
    content: "";
    width: 65%;
    border-bottom: 0.2rem solid ${({ theme }) => theme.palette.main.secondary};
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  &:before {
    content: "👉";
    margin-right: 1rem;
    font-size: 2rem;
  }
`;

const ProjectDate = styled.span``;

const ProjectDescription = styled.p``;

const ProjectsSection = () => {
  return (
    <Section name="projects" title="Projects">
      {projects.map(({ title, description, from, to, images }) => {
        const formatter = new Intl.DateTimeFormat("it");
        const start = formatter.format(new Date(from));
        const end = to ? formatter.format(new Date(to)) : "Current";
        return (
          <ProjectContainer key={title}>
            <ProjectHeader>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectDate>
                {start} - {end}
              </ProjectDate>
            </ProjectHeader>
            <ProjectDescription>{description}</ProjectDescription>
            {images.map((img, index) => (
              <img key={img} src={img} alt={`${title} - ${index}`} />
            ))}
          </ProjectContainer>
        );
      })}
    </Section>
  );
};

export default ProjectsSection;
