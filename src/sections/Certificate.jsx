import { motion } from 'framer-motion';

import { certificate } from '../constants/index.js';
import { useEffect, useRef, useState } from 'react';

const Certificate = () => {
  const sectionRef = useRef(null); // Reference to the section element
  const [isInView, setIsInView] = useState(false); // State to track if section is in view

  // Scroll Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Set isInView to true only if it was false before
        if (entry.isIntersecting && !isInView) {
          setIsInView(true); // Update state when in view
        }
      },
      { threshold: 0.3 }, // Trigger when 30% of the component is in view
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView]);

  const textVariants = (delay = 0) => ({
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delay: delay,
      },
    },
  });
  return (
    <motion.section
      variants={textVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      ref={sectionRef}
      className="c-space my-20 max-w-7xl mx-auto ">
      <motion.h3 variants={textVariants(0.3)} className="head-text">
        Explore My Certificates
      </motion.h3>

      <motion.div variants={textVariants(1)} className="client-container ">
        {certificate.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <a href={`${item.link}`} target="_blank" className="text-white-800 font-bold text-xl">
                {item.title}
              </a>
              <p className="text-white-800 font-light mt-3">{item.review}</p>

              <div className="client-content">
                <div className="flex  gap-3">
                  <div className="flex flex-col">
                    <p className="text-end font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-800 md:text-base text-sm font-light">{item.position}</p>
                  </div>
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Certificate;
