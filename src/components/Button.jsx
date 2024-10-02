import useThemeStore from '../hooks/themeStore';
import { motion } from 'framer-motion';

const Button = ({ name, isBeam = false, containerClass, variants, animate }) => {
  const { theme } = useThemeStore();
  return (
    <motion.button
      variants={variants}
      animate={animate}
      className={`btn ${containerClass} ${theme === 'light' ? 'bg-black-300 text-white' : 'bg-[#5a49ca] text-white'}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </motion.button>
  );
};

export default Button;
