import React, { useState, useEffect } from "react";
import styles from "./styles/Hero.module.scss";

const Hero = () => {
  const images = [
    "https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/677408b55a841e3420f5a9b9_Coming%20Soon%20Website_20241231_162914_0000.png",
    "https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/6774f2de8d60c77ac78cbe91_Coming%20Soon%20Website%20(2).png",
    "https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/6774efe083f335951adc3297_Coming%20Soon%20Website%20(1).png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.carousel}>
        <img
          src={images[currentIndex]}
          alt="Government Scheme"
          className={styles.image}
        />
        <button className={styles.prevButton} onClick={handlePrev}>
          &#8249;
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          &#8250;
        </button>
        <button className={styles.schemeButton}>Know Your Scheme</button>
      </div>
    </div>
  );
};

export default Hero;
