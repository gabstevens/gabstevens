import React from "react";
import styled from "styled-components";

const ColumnContainer = styled("div")({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  "& > *:not(:last-child)": {
    marginRight: "2rem"
  },
  "@media (max-width: 600px)": {
    flexDirection: "column",
    "& > *:not(:last-child)": {
      marginRight: 0,
      marginBottom: "1rem"
    }
  }
});

const Column = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  background: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(4px)",
  "-webkit-backdrop-filter": "blur(4px)",
  borderRadius: "2rem",
  overflow: "hidden"
});

const ColumnTitle = styled("span")({
  width: "100%",
  padding: "0.7rem  0",
  background: ({ background }) => background,
  textAlign: "center",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});

const SkillList = styled("ul")({
  listStyle: "none",
  columns: 2,
  margin: "1rem",
  padding: 0,
  "& > li": {
    padding: "0.2rem"
  }
});

const GenericSkills = () => {
  const mySkills = [
    "Adaptability",
    "Attention to detail",
    "Collaboration",
    "Communication",
    "Customer service",
    "Decision making",
    "Empathy",
    "Leadership",
    "Positivity",
    "Problem solving",
    "Self motivation",
    "Time management",
    "Work ethic"
  ];

  const notMySkills = ["Creativity", "Multitasking"];

  return (
    <ColumnContainer>
      <Column>
        <ColumnTitle background="linear-gradient(225deg, rgba(0, 120, 200, 0.8), rgba(4, 194, 201, 0.8))">
          MY SKILLS
        </ColumnTitle>
        <SkillList>
          {mySkills.map(skill => (
            <li>{skill}</li>
          ))}
        </SkillList>
      </Column>
      <Column>
        <ColumnTitle background="linear-gradient(225deg, rgb(90 0 137 / 80%), rgb(253 120 255 / 80%))">
          NOT MY SKILLS
        </ColumnTitle>
        <SkillList>
          {notMySkills.map(skill => (
            <li>{skill}</li>
          ))}
        </SkillList>
      </Column>
    </ColumnContainer>
  );
};

export default GenericSkills;
