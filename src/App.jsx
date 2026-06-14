import React, { useState, useRef } from "react";

import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Section from "./components/Section/Section.jsx";
import Notification from "./components/Notification/Notification.jsx";

import { FeedbackContext } from "./FeedbackContext";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const statisticsRef = useRef(null);

  const handleLeaveFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));

    statisticsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;

    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    return Math.round((feedback.good / total) * 100);
  };

  const options = Object.keys(feedback);
  const total = countTotalFeedback();

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleLeaveFeedback,
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
