import ReactIcon from './ReactIcon';
import NodejsIcon from './NodejsIcon';
import JavascriptIcon from './JavascriptIcon';
import Html5Icon from './Html5Icon';
import Css3Icon from './Css3Icon';
import MongodbIcon from './MongodbIcon';
import GitIcon from './GitIcon';
import PostgresqlIcon from './PostgresqlIcon';
import AngularIcon from './AngularIcon';
import JavaIcon from './JavaIcon';
import SpringBootIcon from './SpringBootIcon';

const iconComponents = {
  react: ReactIcon,
  nodejs: NodejsIcon,
  javascript: JavascriptIcon,
  html5: Html5Icon,
  css3: Css3Icon,
  mongodb: MongodbIcon,
  git: GitIcon,
  postgresql: PostgresqlIcon,
  angular: AngularIcon,
  java: JavaIcon,
  'spring-boot': SpringBootIcon,
};

const About = () => {
  const skills = [
    { name: 'React', icon: 'react', colorClass: 'fill-blue-400' },
    { name: 'Node.js', icon: 'nodejs', colorClass: 'fill-green-500' },
    { name: 'JavaScript', icon: 'javascript', colorClass: 'fill-yellow-400' },
    { name: 'HTML5', icon: 'html5', colorClass: 'fill-orange-500' },
    { name: 'CSS3', icon: 'css3', colorClass: 'fill-blue-600' },
    { name: 'MongoDB', icon: 'mongodb', colorClass: 'fill-green-600' },
    { name: 'Git', icon: 'git', colorClass: 'fill-orange-600' },
    { name: 'PostgreSQL', icon: 'postgresql', colorClass: 'fill-blue-800' },
    { name: 'Angular', icon: 'angular', colorClass: 'fill-red-600' },
    { name: 'Java', icon: 'java', colorClass: 'fill-cyan-700' },
    { name: 'Spring Boot', icon: 'spring-boot', colorClass: 'fill-green-500' },
  ];

  return (
    <section id="about" className="min-h-screen snap-start flex items-center justify-center py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        
        {/* Left Column - Image */}
        <div className="lg:col-span-1 flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg shadow-sky-500/20  transition-all duration-300 hover:scale-105 hover:shadow-sky-400/40">
            <img 
              src="/profile-pic.webp" 
              alt="Foto de perfil de Camilo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column - Text and Skills */}
        <div className="lg:col-span-2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">Sobre Mí</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Soy un desarrollador web full-stack con una pasión por construir y diseñar experiencias digitales. Mi objetivo es crear aplicaciones web que no solo sean funcionales y escalables, sino también intuitivas y atractivas para el usuario. Estoy en constante aprendizaje, explorando nuevas tecnologías y mejorando mis habilidades para enfrentar nuevos desafíos.
          </p>
          
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">Habilidades</h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            {skills.map(skill => {
              const IconComponent = iconComponents[skill.icon];
              return (
                <div key={skill.name} className="dark:bg-[#1a1a1a] bg-gray-100 dark:border-[#2a2a2a] border-gray-200 rounded-full px-4 py-2 flex items-center gap-2 transition-all duration-300 hover:bg-blue-500/10 hover:border-sky-500/50 hover:scale-105 cursor-pointer">
                  <IconComponent className={`w-6 h-6 ${skill.colorClass}`} />
                  <span className="dark:text-gray-300 text-gray-700 text-sm sm:text-base">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
