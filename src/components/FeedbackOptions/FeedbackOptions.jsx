import React, { useContext } from "react";
import { ButtonsWrapper, FeedbackButton } from "./FeedbackOptions.styled.js";
import { FeedbackContext } from "../../FeedbackContext";

export default function FeedbackOptions({ options }) {
  const { handleLeaveFeedback } = useContext(FeedbackContext);

  return (
    <ButtonsWrapper>
      {options.map((option) => (
        <FeedbackButton
          key={option}
          onClick={() => handleLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </ButtonsWrapper>
  );
}
