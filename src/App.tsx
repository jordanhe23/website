import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-neutral-200 dark:selection:bg-neutral-700">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center border-t border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-black text-neutral-400 text-xs">
        <p>Designed with a neutral aesthetic.</p>
      </footer>
    </div>
  );
};

export default App;