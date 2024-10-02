import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${
        type === 'aboutme'
          ? 'bg-gradient-to-b from-[#111132] to-[#0c0c1d]'
          : 'bg-gradient-to-b from-[#111132] to-[#505064]'
      }`}
      ref={ref}>
      <motion.h1 style={{ y: yText }} className="text-[30px] md:text-[72px] text-center !text-white">
        {type === 'aboutme' ? 'Get to Know Me' : 'Explore My Work'}
      </motion.h1>

      <motion.div className="absolute w-full h-full bg-cover bg-bottom z-30">
        <motion.img src="/assets/mountains.png" alt="fullstack-dev" className="w-full h-full object-cover " />
      </motion.div>

      <motion.div
        className="absolute w-full h-full bg-cover bg-bottom z-20 "
        style={{
          y: yBg,
        }}>
        <motion.img
          src={`${type === 'aboutme' ? '/assets/planets.png' : '/assets/sun.png'}`}
          alt="fullstack-dev"
          className="w-full h-full object-cover "
        />
      </motion.div>

      <motion.div style={{ x: yBg }} className="absolute w-full h-full bg-cover bg-bottom z-10">
        <motion.img src="/assets/stars.png" alt="fullstack-dev" className="w-full h-full object-cover " />
      </motion.div>
    </div>
  );
};

export default Parallax;
