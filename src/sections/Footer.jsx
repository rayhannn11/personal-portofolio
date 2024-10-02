import useThemeStore from '../hooks/themeStore';

const Footer = () => {
  const { theme } = useThemeStore();
  return (
    <footer
      className={`c-space mt-[10rem] py-7 pb-10  border-t border-[#ffffff] flex justify-between items-center flex-wrap gap-5 ${theme === 'light' && 'bg-[#F2F2F2]'}`}>
      <div className=" flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/rayhannn11" target="_blank" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/rayhan-naufal-arrafi-b02175229/" target="_blank" className="social-icon">
          <img src="/assets/linkein.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.instagram.com/rayhan_arrafi/" target="_blank" className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p>© 2024 Rayhan Arrafi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
