import React, { useState } from "react";
import styled from "styled-components";
import profileImg from "../../assets/profile_image.jpg";
import Section from "../Section";

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ProfileImageContainer = styled.div`
  flex: 16rem 1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const ProfileImage = styled.img`
  width: 16rem;
  height: 16rem;
`;

const DescriptionParagraph = styled.p`
  flex: calc(100% - 24rem) 1 1;
  margin: 2rem;
  text-align: justify;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const AboutMeSection = () => {
  const [brithDate] = useState(new Date("19 Jan 1999 00:00:00 GMT+1"));
  const [startDate] = useState(new Date("01 Dec 2018 00:00:00 GMT+1"));
  const myAge = Math.abs(new Date(Date.now() - brithDate).getUTCFullYear() - 1970);
  const workingYear = Math.abs(new Date(Date.now() - startDate).getUTCFullYear() - 1970);

  return (
    <Section name="about-me" title="About Me">
      <InfoContainer>
        <ProfileImageContainer>
          <ProfileImage src={profileImg} alt="Gabriele Stefani" />
        </ProfileImageContainer>
        <DescriptionParagraph>
          I&apos;m a <BoldText> {myAge} </BoldText> years old&nbsp;
          <BoldText>software developer</BoldText> with a&nbsp;
          <BoldText> Bachelor Degree in Software Engineering </BoldText> graduated from the
          Univesità degli Studi di Firenze (University of Florence).
          <br />I got {workingYear} years of work expirience and now I have been leading projects.
          In addition I can describe myself as a flexible person with a very good attitude towards
          quick learning and problem solving.
        </DescriptionParagraph>
      </InfoContainer>
    </Section>
  );
};

export default AboutMeSection;
