import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useOnScreen } from "../ducks/hooks";

const ChartContainer = styled("div")({
  width: "calc(100% - 8rem)",
  padding: "2rem 4rem",
  borderRadius: "2rem",
  "@media (max-width: 600px)": {
    width: "calc(100% - 2rem)",
    padding: "3rem 1rem",
    borderRadius: "1rem"
  },
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  "& > *:not(:last-child)": {
    marginBottom: "0.5rem"
  }
});

const ChartRow = styled("div")({
  width: "100%",
  display: "flex",
  borderRadius: 2,
  overflow: "hidden",
  zIndex: 1
  // borderRadius: "2rem"
});
const ChartLabel = styled("span")({
  width: "25%",
  padding: "0.2rem",
  background: "linear-gradient(225deg, rgba(0, 190, 200, 1), rgba(0, 120, 200, 1))",
  textAlign: "center",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});
const ChartBarContainer = styled("div")({
  display: "flex",
  flexGrow: 1,
  alignItems: "center"
});
const ChartBar = styled("div")({
  background: "linear-gradient(225deg, rgba(0, 120, 200, 0.5), rgba(4, 194, 201, 0.5))",
  border: "solid 2px rgba(0, 190, 200, 0.7)",
  borderLeft: 0,
  borderRadius: "0 2px 2px 0",
  height: "calc(100% - 4px)",
  width: ({ value }) => `${value}%`,
  transition: "width 2s ease-in-out",
  zIndex: 1
});
const ChartBackground = styled("div")({
  marginLeft: "-2px",
  height: "calc(100% - 2px)",
  border: "1px solid rgba(255, 255, 255, 0.25)",
  width: ({ value }) => `${100 - value}%`,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  transition: "width 2s ease-in-out"
});
const ChartValue = styled("span")({
  width: "7.5%",
  padding: "0.2rem",
  background: "linear-gradient(225deg, rgba(0, 190, 200, 1), rgba(0, 120, 200, 1))",
  textAlign: "center",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});

const SkillChart = () => {
  const [skillList] = useState([
    { label: "React", score: 90 },
    { label: "JavsScript", score: 90 },
    { label: "Ruby on Rails", score: 70 },
    { label: "Angular", score: 60 },
    { label: "Java", score: 60 },
    { label: "Python", score: 60 },
    { label: "PHP", score: 50 },
    { label: "Laravel", score: 50 },
    { label: "Django", score: 40 },
    { label: "Gatsby", score: 45 },
    { label: "MySQL", score: 40 },
    { label: "PostgreSQL", score: 40 },
    { label: "C/C++", score: 20 }
  ]);

  return (
    <ChartContainer>
      {/* <Background /> */}
      {skillList.map(({ label, score }) => {
        const ref = useRef();
        const isVisible = useOnScreen(ref);
        return (
          <ChartRow ref={ref}>
            <ChartLabel>{label}</ChartLabel>
            <ChartBarContainer>
              <ChartBar value={isVisible ? score : 0} />
              <ChartBackground value={isVisible ? score : 0} />
            </ChartBarContainer>
            <ChartValue>{score}%</ChartValue>
          </ChartRow>
        );
      })}
    </ChartContainer>
  );
};

export default SkillChart;
