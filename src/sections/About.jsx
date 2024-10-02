import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';

import Button from '../components/Button.jsx';
import useThemeStore from '../hooks/themeStore.js';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const { theme } = useThemeStore();
  const globeEl = useRef();

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

  useEffect(() => {
    // Point the camera to Jakarta, Indonesia
    globeEl.current.pointOfView({ lat: -6.2088, lng: 106.8456, altitude: 2 }, 1000);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(' rayhanarrafi1107@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const textVariants = (delay = 0) => ({
    initial: {
      scale: 0.3,
      opacity: 0.3,
    },
    animate: {
      scale: [0.3, 0.5, 1],
      opacity: 1,
      transition: {
        duration: 2, // Atur durasi keseluruhan agar smooth
        delay: delay, // Menyesuaikan delay
        ease: 'easeInOut', // Membuat animasi lebih halus
      },
    },
  });

  return (
    <section ref={sectionRef} className={`c-space my-20"  ${theme === 'light' && 'bg-[#F2F2F2]'} w-full `} id="about">
      <motion.div
        variants={textVariants(0.3)} // Menambahkan sedikit delay
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full max-w-7xl mx-auto p-[3rem]">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container ">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className=" w-[186px] h-[186px]  object-contain rounded-full bg-[#244155] mx-auto my-10"
            />

            <div className="grid-container">
              <p className="grid-headtext">Hi, I’m Rayhan Arrafi</p>
              <p className="grid-subtext">
                With many projects of experience, I have honed my skills in Project Management, Frontend, Backend and QA
                automation, creating dynamic and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a diverse range of tools and technologies, each tailored to specific stages of the
                development lifecycle to ensure efficient, high-quality, and scalable applications:
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeEl}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg" // Updated to a daytime map
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: -6.2088, lng: 106.8456, text: 'Jakarta, Indonesia', color: 'white' }]}
                labelSize={() => 3} // Set a large static size for all labels
                labelText="text" // Use the 'text' field for displaying the label
                labelColor={() => 'white'} // White text color
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Jakarta, Indonesia and open to remote work worldwide.</p>
              <a href="#contact">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">
                  rayhanarrafi1107@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
