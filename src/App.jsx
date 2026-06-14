import React, { useRef } from "react";

import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

import { FeedbackContext } from "./FeedbackContext";
import { useFeedback } from "./hooks/useFeedback";

export default function App() {
  const {
    feedback,
    handleLeaveFeedback,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  } = useFeedback();

  const statisticsRef = useRef(null);

  const handleFeedbackClick = (type) => {
    handleLeaveFeedback(type);

    statisticsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const options = Object.keys(feedback);
  const total = countTotalFeedback();

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleLeaveFeedback: handleFeedbackClick,
      }}
    >
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} />
        </Section>

        <Section title="Statistics" ref={statisticsRef}>
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    </FeedbackContext.Provider>
  );
}
