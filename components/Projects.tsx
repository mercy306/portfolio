'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Online Counselling Platform',
    description: 'A web-based counseling system connecting clients with counselors, enabling secure registration, appointments, chat/video sessions, and payments. Built with React.js, Next.js, Tailwind CSS, and MongoDB.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'MongoDB'],
    image: 'https://opengraph.githubassets.com/1/mercy306/counselconnect',
    github: 'https://github.com/mercy306/counselconnect',
    live: 'https://counselconnect-x11aj4dtf-mihirets-projects-e5f11159.vercel.app',
  },
  {
    title: 'School Management System',
    description: 'A comprehensive school management web application for handling student information, grades, attendance, and administrative tasks. Built with PHP, HTML, CSS, and MySQL.',
    tags: ['PHP', 'HTML', 'CSS', 'MySQL'],
    image: 'https://opengraph.githubassets.com/1/mercy306/school-management',
    github: 'https://github.com/mercy306/school-management',
    live: null,
  },
  {
    title: "Harar Cultural Guide",
    description: 'A mobile app showcasing Harar\'s rich cultural heritage with audio functionality. Built with React Native to provide an immersive cultural experience.',
    tags: ['React Native', 'JavaScript', 'Mobile'],
    image: 'https://opengraph.githubassets.com/1/mercy306/harar-cultural-guide',
    github: 'https://github.com/mercy306/harar-cultural-guide',
    live: 'https://harar-cultural-guide-k92c81770-mihirets-projects-e5f11159.vercel.app',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-slate-100 dark:bg-slate-950">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-slate-100 to-purple-100 dark:from-slate-900 dark:via-slate-950/10 dark:to-slate-950 -z-10"></div>
      
      {/* Decorative glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full shadow-lg shadow-purple-500/30"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 rounded-xl overflow-hidden shadow-lg border border-slate-300 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Social links overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
                
                {/* Project type badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold rounded-full shadow-lg shadow-blue-500/30">
                  Project
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-200 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags with enhanced styling */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-800 dark:text-blue-200 rounded-lg text-sm font-medium border border-blue-300 dark:border-blue-700 hover:border-blue-500 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* View project link */}
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-all"
                  >
                    View Code
                    <Github className="w-4 h-4 ml-2" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-all"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
