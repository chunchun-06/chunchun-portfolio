/**
 * App.jsx
 *
 * Root application component.
 *
 * FloatingButton is rendered outside <main> so it remains fixed across
 * all future scroll sections without being trapped inside any stacking context.
 */

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import FloatingButton from './components/FloatingButton/FloatingButton';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Fixed floating button — always on top of all sections */}
      <FloatingButton />
    </>
  );
}

export default App;
