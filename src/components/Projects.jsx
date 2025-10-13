import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  useEffect(() => {
    const getProjectsPerPage = () => window.innerWidth < 768 ? 1 : 3;
    setProjectsPerPage(getProjectsPerPage());

    const handleResize = () => {
      setProjectsPerPage(getProjectsPerPage());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  useEffect(() => {
    let result = projects;

    if (selectedTech !== 'All') {
      result = result.filter(p => p.technologies.includes(selectedTech));
    }

    if (searchTerm) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(result);
    setCurrentPage(1); // Reset to first page on filter change
  }, [searchTerm, selectedTech, projects]);

  const allTechs = ['All', ...new Set(projects.flatMap(p => p.technologies))];

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  return (
    <section id="projects" className="min-h-screen snap-start px-4 sm:px-8 md:px-12 lg:px-20 pt-28 pb-10">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">Mis Proyectos</h2>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <input
            type="text"
            placeholder="Buscar proyecto..."
            className="w-full sm:w-1/2 dark:bg-[#1a1a1a] bg-gray-200 dark:border-[#2a2a2a] border-gray-300 rounded-full px-4 py-2 dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
            onChange={e => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-wrap justify-center gap-2">
            {allTechs.map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                aria-pressed={selectedTech === tech}
                className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-300 hover:scale-105 ${
                  selectedTech === tech
                    ? 'bg-pink-500 border-pink-500 text-white scale-105'
                    : 'bg-transparent dark:border-[#2a2a2a] border-gray-300 dark:text-gray-300 text-gray-700 dark:hover:bg-[#1a1a1a] hover:bg-gray-200'
                }`}>
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          key={currentPage + selectedTech + searchTerm}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[350px]"
        >
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={projectsPerPage === 1 ? 'max-w-sm mx-auto' : ''}
              style={{ animation: `fadeIn 0.5s ease-in-out ${index * 100}ms forwards`, opacity: 0 }}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 rounded-full border dark:border-[#2a2a2a] border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed dark:hover:bg-[#1a1a1a] hover:bg-gray-200 transition-colors">
              Anterior
            </button>
            <span className="text-gray-500 dark:text-gray-400">Página {currentPage} de {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 rounded-full border dark:border-[#2a2a2a] border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed dark:hover:bg-[#1a1a1a] hover:bg-gray-200 transition-colors">
              Siguiente
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
