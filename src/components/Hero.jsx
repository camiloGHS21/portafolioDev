import Spline from '@splinetool/react-spline';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import MailSendIcon from './MailSendIcon';
import LinkIcon from './LinkIcon';
import DiamondIcon from './DiamondIcon';

const Hero = () => {
  const [webGLSupported, setWebGLSupported] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl && gl instanceof WebGLRenderingContext) {
      setWebGLSupported(true);
    }
  }, []);

  return (
    <main className="h-screen snap-start flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Left Section */}
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        {/*tag box-width gradient border */}
         <div className='relative w-[95%] sm:w-64 h-10 bg-white dark:bg-black rounded-full p-[2px] shadow-[0_0_10px_rgba(0,0,0,0.1)] border border-[#e0e0e0] dark:border-[#2a2a2a] mb-6'>
            <div className='absolute inset-[3px] rounded-full flex items-center justify-center text-black dark:text-white text-sm sm:text-base font-light tracking-wide gap-1'>
              
                <DiamondIcon className='dark:fill-white fill-black' />Bienvenido a mi Portafolio
               
            </div>
           
      </div> 
        {/* Main Heading */}
       <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider my-6'>Desarrollador Web Full-Stack
      </h1>

      {/*decriptions */}
        <p className='text-base text-gray-600 dark:text-gray-400 sm:text-lg md:text-lg leading-relaxed mb-6 tracking-wider max-w-[25rem] lg:max-w-[30rem]'>Apasionado por crear soluciones web innovadoras y de alto rendimiento. Con experiencia en el desarrollo de aplicaciones robustas y escalables, transformo ideas en experiencias digitales impactantes. Explora mis proyectos para ver mi trabajo.</p>
         {/* buttons */}
        <div className='flex gap-4 mt-12'>
      <a href="#projects"  className='border dark:border-[#2a2a2a] border-[#e0e0e0] py-2 sm:py-3 px-4 sm:px-5 rounded-full 
      sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-bottom bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-[length:200%_200%] bg-left text-black dark:text-white'>
        Ver Mi Trabajo<LinkIcon className='inline-block fill-black dark:fill-white ml-2' />
        </a>
        <a href="mailto:tu.email@example.com" className='group border dark:border-[2a2a2a] border-[#e0e0e0] py-2 sm:py-3 px-8 sm:px-10 rounded-full 
      sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 dark:hover:bg-[#1a1a1a] hover:bg-gray-200
      dark:bg-gray-300 bg-gray-700 dark:text-black text-white  dark:hover:text-white hover:text-black'   target="_blank" rel="noopener noreferrer" aria-label="Enviar un correo electrónico">
         Contáctame
         <MailSendIcon className='inline-block  ml-2 fill-white dark:fill-black group-hover:fill-black dark:group-hover:fill-white' />
      </a>
      </div>
      </div>
      {/* 3D Robot*/}
      <div className='absolute lg:top-0 top-[-25%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full w-full'>
        {webGLSupported ? (
          <Spline scene="/robotFrontend.splinecode" className='h-full w-full' />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <img src="/robotFrontend.png" alt="Robot 3D Fallback" className="h-3/5 w-auto" />
          </div>
        )}
      </div>
    </main>
  )
}

export default Hero;