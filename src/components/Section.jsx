import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  text-shadow: ${({ transparent }) => (transparent ? "4px 4px 16px black" : "")};
  color: ${({ transparent, theme }) => (transparent ? "white" : theme.palette.main.secondary)};
  background-color: ${({ transparent }) => (transparent ? "transparent" : "white")};
`;

const SectionTitle = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 1rem 0;
  &:after {
    content: "";
    width: 65%;
    border-bottom: 0.2rem solid;
    box-shadow: ${({ transparent }) => (transparent ? "4px 4px 16px black" : "")};
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = React.forwardRef(({ title, name, transparent, className, children }, ref) => {
  return (
    <SectionContainer transparent={transparent} className={className} ref={ref}>
      {title && (
        <SectionTitle id={name} transparent={transparent}>
          {title}
        </SectionTitle>
      )}
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
});

export default Section;
