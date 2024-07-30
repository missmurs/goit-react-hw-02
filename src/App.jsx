import { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("saved-feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : initialFeedback;
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
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

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
