import React from "react";
import styles from "./styles/Guide.module.scss";

const Guide = () => {
  const steps = [
    {
      title: "Explore Schemes",
      description:
        "Provide your basic details like location, income, & family size to receive personalized scheme recommendations. Browse through various categories such as health, education, & employment.",
    },
    {
      title: "Check Your Eligibility",
      description:
        "Use our AI-powered eligibility checker to find the schemes you're eligible for. Get real-time verification tailored to your unique profile.",
    },
    {
      title: "Submit Required Documents",
      description:
        "Upload necessary documents like Aadhaar and income proof. Our OCR technology verifies them instantly and helps you address missing or incorrect information.",
    },
    {
      title: "Apply for Schemes",
      description:
        "Fill out application forms with pre-filled data based on your profile. Submit your applications directly and save time.",
    },
    {
      title: "Track Your Application",
      description:
        "Stay updated with real-time notifications on your application's progress. Receive updates via SMS or your user dashboard.",
    },
    {
      title: "Get Support",
      description:
        "Locate nearby help centers, banks, or CSCs using our geo-location feature. Connect with others via our community portal to share and learn experiences.",
    },
  ];

  return (
    <div className={styles.guideSection}>
      <h2 className={styles.title}>How to Use Our Platform</h2>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepNumber}>{index + 1}</div>
            <div className={styles.stepDetails}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
