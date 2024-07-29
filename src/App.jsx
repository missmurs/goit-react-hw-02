import { useState, useEffect } from "react";
import "./App.css";

import Description from "./componets/Description/Description";
import Feedback from "./componets/Feedback/Feedback";
import Options from "./componets/Options/Options";
import Notification from "./componets/Notification/Notification";
function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);
  console.log(feedback);
  const upcloseFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(
    (feedback.good / (totalFeedback - feedback.neutral)) * 100
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        upcloseFeedback={upcloseFeedback}
      />
      {totalFeedback > 0 ? (
        <div>
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positive={positiveFeedback}
          />
        </div>
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
