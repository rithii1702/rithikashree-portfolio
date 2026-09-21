import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Education } from '../components/Education';
import { Certifications } from '../components/Certifications';
import { ResumeCTA } from '../components/ResumeCTA';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <ResumeCTA />
      <Contact />
    </div>
  );
};
