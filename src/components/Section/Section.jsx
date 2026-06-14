import React, { forwardRef } from "react";
import { SectionWrapper, SectionTitle } from "./Section.styled.js";

const Section = forwardRef(({ title, children }, ref) => {
  return (
    <SectionWrapper ref={ref}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
});

export default Section;
