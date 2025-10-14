import React from 'react';
import GitIcon from './GitIcon';
import LinkIcon from './LinkIcon';

const ProjectCard = ({ project, style, className = '' }) => {
  return (
    <div style={style} key={project.id} className={`dark:bg-[#1a1a1a] bg-gray-100 dark:border-[#2a2a2a] border-gray-200 rounded-lg p-4 sm:p-6 flex flex-col justify-between hover:shadow-lg hover:shadow-sky-500/10 transition-shadow duration-300 ${className}`}>
      <div>
        {project.image && <img src={`/${project.image}`} alt={project.title} className="w-full h-32 sm:h-40 object-cover rounded-md mb-4" />}
        <h3 className="text-base sm:text-lg font-semibold mb-2 dark:text-white text-black">{project.title}</h3>
        <p className="dark:text-gray-400 text-gray-600 text-xs sm:text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="dark:bg-gray-700 bg-gray-300 dark:text-gray-300 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer">{tech}</span>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-4">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver el código de ${project.title} en GitHub`} className="text-gray-400 hover:text-sky-500 transition-all duration-300 hover:scale-110">
          <GitIcon className="fill-current w-6 h-6" />
        </a>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${project.title} en vivo`} className="text-gray-400 hover:text-sky-500 transition-all duration-300 hover:scale-110">
          <LinkIcon className="fill-current w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
