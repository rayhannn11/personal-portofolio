import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';
import useThemeStore from '../hooks/themeStore.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

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
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delay: delay,
      },
    },
  });

  const { theme } = useThemeStore();
  return (
    <motion.section
      variants={textVariants} // Menambahkan sedikit delay
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      ref={sectionRef}
      className={`c-space my-20  ${theme === 'light' && 'bg-[#F2F2F2]'} `}
      id="work">
      <motion.div className="w-full max-w-7xl mx-auto py-20">
        <motion.p variants={textVariants(0.3)} className="head-text">
          My Project Experience
        </motion.p>

        <motion.div variants={textVariants(1)} className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group text-white-600">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold ">{item.name}</p>
                      <p className="text-sm mb-5">
                        {item.pos} -- <span>{item.duration}</span>
                      </p>
                      <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WorkExperience;
