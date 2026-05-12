import React from "react";
import { SectionWrapper, SectionTitle } from "./Section.styled.js";

export default function Section({ title, children }) {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
}
