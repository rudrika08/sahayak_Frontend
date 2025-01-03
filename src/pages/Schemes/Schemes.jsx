import React, { useState } from "react";
import Question from "../../components/Questions/Questions";
import { questions } from "../../helper/Question";
import styles from "./styles/Schemes.module.scss";

const QuestionnairePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (question, answer) => {
    setResponses({ ...responses, [question]: answer });
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsComplete(true);
      // Send `responses` to a database or an API here
      console.log("Final Responses:", responses);
    }
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Government Scheme Finder</h1>
      {!isComplete ? (
        <Question
          question={questions[currentIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className={styles.completeMessage}>
          <h2>Thank You!</h2>
          <p>Your responses have been recorded. Based on your details, we will suggest the best schemes for you.</p>
        </div>
      )}
    </div>
  );
};

export default QuestionnairePage;