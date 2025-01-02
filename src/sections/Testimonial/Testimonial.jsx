import React from 'react';
import styles from './styles/Testimonial.module.scss';
import testimonials from '../../../public/data/testimonial.json';

const Testimonial = () => {
  return (
    <div className={styles.testimonialSection}>
      <h2>Testimonials</h2>
      <div className={styles.testimonialList}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.title}</h4>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
