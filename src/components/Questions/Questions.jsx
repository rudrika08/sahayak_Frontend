import React, { useState } from "react";
import styles from "./styles/Questions.module.scss";

const Question = ({ question, onAnswer }) => {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (e) => setAnswer(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(question.id, answer);
  };

  return (
    <div className={styles.question}>
      <h2>{question.category}</h2>
      <p>{question.question}</p>
      <form onSubmit={handleSubmit}>
        {question.type === "text" && <input type="text" value={answer} onChange={handleInputChange} required />}
        {question.type === "date" && <input type="date" value={answer} onChange={handleInputChange} required />}
        {question.type === "radio" &&
          question.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                onChange={handleInputChange}
                required
              />
              {option}
            </label>
          ))}
        {question.type === "select" && (
          <select value={answer} onChange={handleInputChange} required>
            <option value="">Select an option</option>
            {question.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        <button type="submit" className={styles.submitButton}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Question;