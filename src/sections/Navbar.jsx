import { useState } from 'react';

import { navLinks } from '../constants/index.js';
import useThemeStore from '../hooks/themeStore.js';
import { FaSun, FaMoon, FaLaptopCode, FaTimes, FaBars } from 'react-icons/fa';
import useTailwindConfig from '../hooks/useTailwindConfig.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const { navbar, highlightFont } = useTailwindConfig();

  console.log(navbar);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  console.log(theme);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${navbar}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="flex items-center gap-3 font-bold text-xl transition-colors">
            <FaLaptopCode className={`${highlightFont}`} />
            Rayhan
          </a>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>

          <div className="flex items-center gap-4">
            <button className="w-12 h-10 inline" onClick={toggleTheme}>
              {theme === 'light' ? <FaSun /> : <FaMoon />}
            </button>
            <button onClick={toggleMenu} className=" focus:outline-none sm:hidden flex" aria-label="Toggle menu">
              {isOpen ? (
                <FaTimes color={theme === 'dark' ? '#fff' : '#000'} />
              ) : (
                <FaBars color={theme === 'dark' ? '#fff' : '#000'} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'min-h-screen' : 'max-h-0'} ${navbar}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
