import React from "react";
import { ButtonsWrapper, FeedbackButton } from "./FeedbackOptions.styled.js";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonsWrapper>
      {options.map((option) => (
        <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackButton>
      ))}
    </ButtonsWrapper>
  );
}
