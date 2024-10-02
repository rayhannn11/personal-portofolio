import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Certificate from './sections/Certificate.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import Parallax from './sections/parallax.jsx';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full mx-auto relative">
      <Navbar />
      <Hero />
      <Parallax type="aboutme" />
      <About />
      <Certificate />
      <Parallax type="myproject" />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
