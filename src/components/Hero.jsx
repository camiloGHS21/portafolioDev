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
    <main className="h-screen snap-start flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 pt-24 lg:pt-0">
      {/* Right Section - 3D Robot */}
      <div className="w-full h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center lg:order-last">
        {webGLSupported ? (
          <Spline scene="/robotFrontend.splinecode" />
        ) : (
          <img src="/robotFrontend.webp" alt="Robot 3D" className="w-full h-auto max-w-sm" />
        )}
      </div>

      {/* Left Section - Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-4">
        <div className='relative w-auto inline-block bg-white dark:bg-black rounded-full p-px shadow-md border border-gray-200 dark:border-gray-700 mb-4'>
          <div className='flex items-center justify-center text-black dark:text-white text-sm px-4 py-1 rounded-full'>
            <DiamondIcon className='dark:fill-white fill-black mr-2' />
            Bienvenido a mi Portafolio
          </div>
        </div>
        
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide my-4'>
          Desarrollador Web Full-Stack
        </h1>

        <p className='text-base text-gray-600 dark:text-gray-400 sm:text-lg leading-relaxed mb-8 max-w-lg'>
          Apasionado por crear soluciones web innovadoras y de alto rendimiento. Transformo ideas en experiencias digitales impactantes.
        </p>
        
        <div className='flex flex-col sm:flex-row gap-4 mt-8'>
          <a href="#projects"  className='border dark:border-[#2a2a2a] border-[#e0e0e0] py-3 px-6 rounded-full 
      text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-bottom bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-[length:200%_200%] bg-left text-black dark:text-white'>
            Ver Mi Trabajo<LinkIcon className='inline-block fill-black dark:fill-white ml-2' />
          </a>
          <a href="mailto:tu.email@example.com" className='group border dark:border-[2a2a2a] border-[#e0e0e0] py-3 px-6 rounded-full 
      text-lg font-semibold tracking-wider transition-all duration-300 dark:hover:bg-[#1a1a1a] hover:bg-gray-200
      dark:bg-gray-300 bg-gray-700 dark:text-black text-white  dark:hover:text-white hover:text-black'   target="_blank" rel="noopener noreferrer" aria-label="Enviar un correo electrónico">
            Contáctame
            <MailSendIcon className='inline-block  ml-2 fill-white dark:fill-black group-hover:fill-black dark:group-hover:fill-white' />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Hero;