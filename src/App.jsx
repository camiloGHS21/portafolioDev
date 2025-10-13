
import React, { Suspense, lazy } from 'react';
import Header from "./components/Header"
import Hero from "./components/Hero"
import SectionAnimator from "./components/SectionAnimator"
import AboutSkeleton from './components/AboutSkeleton';
import ProjectsSkeleton from './components/ProjectsSkeleton';
import ContactSkeleton from './components/ContactSkeleton';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {

  return (
    <>
     
     {/* Blur Effect */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 opacity-30 filter blur-3xl"></div>

      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <Suspense fallback={<AboutSkeleton />}>
        <SectionAnimator direction="left">
          <About />
        </SectionAnimator>
      </Suspense>
      {/* Projects Section */}
      <Suspense fallback={<ProjectsSkeleton />}>
        <SectionAnimator direction="right">
          <Projects />
        </SectionAnimator>
      </Suspense>
      {/* Contact Section */}
      <Suspense fallback={<ContactSkeleton />}>
        <SectionAnimator direction="up">
          <Contact />
        </SectionAnimator>
      </Suspense>
      
    </>
  )
}

export default App

