import React from 'react';
import GithubIcon from './GithubIcon';
import LinkedinSquareIcon from './LinkedinSquareIcon';

const iconComponents = {
  github: GithubIcon,
  'linkedin-square': LinkedinSquareIcon,
};

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/camiloGHS21', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/camilo-grajales-a65275308/', icon: 'linkedin-square' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-gray-400 px-4 sm:px-8 md:px-12 lg:px-20 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Social Media Links */}
        <div className="flex gap-6">
          {socialLinks.map(link => {
            const IconComponent = iconComponents[link.icon];
            return (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.name}
                className="transition-transform duration-300 hover:scale-125 hover:text-sky-400"
              >
                <IconComponent className="fill-current w-6 h-6" />
              </a>
            )
          })}
        </div>

        {/* Copyright */}
        <div className="text-center sm:text-right">
          <p className="text-sm">&copy; {currentYear} CamiloDEv. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
