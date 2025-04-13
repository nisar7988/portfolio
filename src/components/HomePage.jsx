import { Colors } from '../constants/colors';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const HomePage = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen" style={{ background: Colors.gradients.main }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;