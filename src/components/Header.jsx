import React, { useState, useEffect, useContext, useRef } from 'react';
import 'boxicons';
import ThemeToggleButton from './ThemeToggleButton';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useContext(ThemeContext);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const focusableElements = menuRef.current.querySelectorAll('a, button');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscapeKey = (e) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false);
          menuButtonRef.current.focus();
        }
      };

      firstElement.focus();
      document.addEventListener('keydown', handleTabKey);
      document.addEventListener('keydown', handleEscapeKey);

      return () => {
        document.removeEventListener('keydown', handleTabKey);
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isMenuOpen]);

  const navLinks = (
    <>
      <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-base tracking-wider transition-colors hover:text-blue-400 text-lg md:text-xl lg:text-2xl font-light m-4 z-50">
        Proyectos
      </a>
      <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-base tracking-wider transition-colors hover:text-blue-400 text-lg md:text-xl lg:text-2xl font-light m-4 z-50">
        Sobre mí
      </a>
      <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-base tracking-wider transition-colors hover:text-blue-400 text-lg md:text-xl lg:text-2xl font-light m-4 z-50">
        Contacto
      </a>
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 lg:px-20 transition-all duration-300 ${isScrolled ? 'bg-white/50 dark:bg-black/50 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <a href="#" className="text-3xl md:text-4xl lg:text-5xl font-light m-0">CamiloDEv</a>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        {navLinks}
        <ThemeToggleButton />
      </nav>

      {/* Hamburger Menu Icon */}
      <button ref={menuButtonRef} className='md:hidden text-3xl p-2 z-50' onClick={toggleMenu} aria-label="Toggle Menu" aria-expanded={isMenuOpen} aria-controls="mobile-menu">
        <box-icon name={isMenuOpen ? 'x' : 'menu'} color={theme === 'dark' ? '#fff' : '#000' }></box-icon>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal={isMenuOpen}
        aria-hidden={!isMenuOpen}
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white dark:bg-black bg-opacity-95 flex flex-col items-center justify-center z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks}
          <div className="mt-8">
            <ThemeToggleButton />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;