import { motion } from 'framer-motion';

import Button from '../components/Button.jsx';
import useThemeStore from '../hooks/themeStore.js';
import useTailwindConfig from '../hooks/useTailwindConfig.js';

const Hero = () => {
  const { highlightFont } = useTailwindConfig();
  const { theme } = useThemeStore();

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
    scrollButton: {
      opacity: [0, 1, 0],
      scale: [1, 1.1, 1], // Menambahkan sedikit efek pembesaran
      transition: {
        duration: 8, // Memperlambat durasi animasi
        repeat: Infinity,
      },
    },
  });

  return (
    <section className="min-h-screen w-full flex flex-col relative my-10" id="home">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <motion.p
          variants={textVariants(0.5)}
          className="sm:text-3xl text-xl font-medium  text-center font-generalsans transition-colors">
          Hi, I am Rayhan <span className="waving-hand">👋</span>
        </motion.p>
        <motion.p variants={textVariants(1)} className={`hero_tag ${highlightFont}`}>
          Building & Planning Website
        </motion.p>
      </motion.div>

      <motion.div variants={textVariants} initial="initial" animate="animate" className="w-full h-auto my-10 inset-0">
        <motion.img
          variants={textVariants(1.4)}
          src={`${theme === 'light' ? 'assets/hero1-light.png' : 'assets/hero1-dark.png'}`}
          alt="fullstack-dev"
          className="w-full h-[400px]  object-contain "
        />
      </motion.div>

      <motion.div variants={textVariants()} initial="initial" animate="animate" className=" w-full z-10 c-space">
        <motion.a variants={textVariants()} href="#about" className="w-fit">
          <Button
            variants={textVariants(1.6)}
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
