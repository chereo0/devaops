import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ProjectPage from './pages/ProjectPage';
import { ScrollVelocity, ClickSpark } from './components/reactbits';

// Home page component with all sections
const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    
    {/* Scroll Velocity Marquee - hidden on small mobile */}
    <Box py={{ base: 4, md: 8 }} overflow="hidden" display={{ base: 'none', sm: 'block' }}>
      <ScrollVelocity 
        texts={["INNOVATION", "CREATIVITY", "EXCELLENCE", "TECHNOLOGY"]} 
        velocity={60}
        className="marquee-text"
        parallaxStyle={{ background: 'transparent' }}
        scrollerStyle={{ color: 'rgba(191, 231, 161, 0.15)', fontWeight: 'bold', fontSize: 'clamp(1.5rem, 4vw, 5rem)' }}
      />
    </Box>
    
    <About />
    <Services />
    
    {/* Another Scroll Velocity Marquee - hidden on small mobile */}
    <Box py={{ base: 4, md: 8 }} overflow="hidden" display={{ base: 'none', sm: 'block' }}>
      <ScrollVelocity 
        texts={["WEB DEVELOPMENT", "MOBILE APPS", "UI/UX DESIGN", "CLOUD SOLUTIONS"]} 
        velocity={50}
        className="marquee-text"
        parallaxStyle={{ background: 'transparent' }}
        scrollerStyle={{ color: 'rgba(191, 231, 161, 0.1)', fontWeight: 'bold', fontSize: 'clamp(1.5rem, 4vw, 5rem)' }}
      />
    </Box>
    
    <Projects />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <ClickSpark sparkColor="#BFE7A1" sparkRadius={25} sparkCount={12} duration={500}>
        <Box 
          minH="100vh" 
          bg="linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)"
          overflowX="hidden"
          position="relative"
        >
        {/* Ambient glow effects */}
        <Box
          position="fixed"
          top="-20%"
          left="-10%"
          width="50%"
          height="50%"
          bg="radial-gradient(circle, rgba(191, 231, 161, 0.08) 0%, transparent 70%)"
          pointerEvents="none"
          zIndex={0}
        />
        <Box
          position="fixed"
          bottom="-30%"
          right="-10%"
          width="60%"
          height="60%"
          bg="radial-gradient(circle, rgba(191, 231, 161, 0.05) 0%, transparent 70%)"
          pointerEvents="none"
          zIndex={0}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Box>
    </ClickSpark>
  </Router>
  );
}

export default App;
