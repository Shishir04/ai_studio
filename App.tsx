import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Motivation from './components/Motivation';
import Methodology from './components/Methodology';
import Results from './components/Results';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-900 selection:bg-iima-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Motivation />
        <Methodology />
        <Results />
      </main>
      <Contact />
    </div>
  );
};

export default App;