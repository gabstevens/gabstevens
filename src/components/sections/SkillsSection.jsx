import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";
import Section from "../Section";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 28rem 1 1;
  display: flex;
  flex-direction: column;
`;

const ChartTitle = styled.h3`
  margin: 0 2rem;
`;

const ChartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const PieChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 12rem 1 1;
  height: auto;
  margin: 0 1rem 1rem 1rem;
  filter: drop-shadow(4px 4px 16px black);
  svg {
    height: auto;
  }
`;

const LegendList = styled.ul`
  flex: 10rem 0 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0 2rem 2rem 2rem;
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const LegendItem = styled.li`
  display: flex;
  align-items: center;
`;

const LegendText = styled.span`
  white-space: nowrap;
  text-shadow: 4px 4px 16px black;
  // font-size: 1.5rem;
`;

const ColorMark = styled.span`
  height: 2rem;
  flex: 2rem 0 0;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  display: inline-block;
  box-shadow: 4px 4px 16px black;
  margin-right: 1rem;
`;

const SkillsSection = () => {
  const [languageList] = useState([
    { label: "JavaScript", score: 25, color: "#ef476f" },
    { label: "TypeScript", score: 20, color: "#06d6a0" },
    { label: "Python", score: 20, color: "#118ab2" },
    { label: "Java", score: 10, color: "#FFA400" },
    { label: "ruby", score: 10, color: "#073b4c" },
    { label: "PHP", score: 10, color: "#8093f1" },
    { label: "C/C++", score: 5, color: "#1C5D99" }
  ]);

  const [frameworkList] = useState([
    { label: "React", score: 25, color: "#ef476f" },
    { label: "Angular", score: 20, color: "#06d6a0" },
    { label: "Gatsby", score: 20, color: "#118ab2" },
    { label: "Rails", score: 15, color: "#FFA400" },
    { label: "Laravel", score: 10, color: "#073b4c" },
    { label: "Django", score: 10, color: "#8093f1" }
  ]);

  return (
    <Section name="skills" title="Skills" transparent>
      <Row>
        <Column>
          <ChartTitle>Languages</ChartTitle>
          <ChartContainer>
            <PieChartContainer>
              <PieChart
                animate
                lineWidth={60}
                labelPosition={70}
                startAngle={270}
                labelStyle={{
                  fontSize: "0.375rem",
                  fill: "white",
                  textShadow: "4px 4px 16px black"
                }}
                label={({ dataEntry }) => `${Math.floor(dataEntry.percentage)}%`}
                data={frameworkList.map(({ label, score, color }) => ({
                  title: label,
                  value: score,
                  color
                }))}
              />
            </PieChartContainer>
            <LegendList>
              {frameworkList.map(({ label, color }) => (
                <LegendItem key={label}>
                  <ColorMark color={color} />
                  <LegendText>{label}</LegendText>
                </LegendItem>
              ))}
            </LegendList>
          </ChartContainer>
        </Column>
        <Column>
          <ChartTitle>Frameworks</ChartTitle>
          <ChartContainer>
            <PieChartContainer>
              <PieChart
                animate
                lineWidth={60}
                labelPosition={70}
                startAngle={270}
                labelStyle={{
                  fontSize: "0.375rem",
                  fill: "white",
                  textShadow: "4px 4px 16px black"
                }}
                label={({ dataEntry }) => `${Math.floor(dataEntry.percentage)}%`}
                data={languageList.map(({ label, score, color }) => ({
                  title: label,
                  value: score,
                  color
                }))}
              />
            </PieChartContainer>
            <LegendList>
              {languageList.map(({ label, color }) => (
                <LegendItem key={label}>
                  <ColorMark color={color} />
                  <LegendText>{label}</LegendText>
                </LegendItem>
              ))}
            </LegendList>
          </ChartContainer>
        </Column>
      </Row>
    </Section>
  );
};

export default SkillsSection;
