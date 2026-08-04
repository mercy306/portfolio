'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'faith-journey',
    title: 'FaithJourney Game',
    category: 'game',
    categoryLabel: 'Interactive Game',
    description:
      'An engaging interactive game application designed to provide an uplifting journey with immersive gameplay mechanics, interactive levels, and intuitive user interface.',
    tags: ['JavaScript', 'Game Dev', 'HTML5/CSS3', 'Interactive UI'],
    image: 'https://opengraph.githubassets.com/1/mercy306/FaithJourney',
    github: 'https://github.com/mercy306/FaithJourney',
    live: null,
    featured: true,
  },
  {
    id: 'counselconnect',
    title: 'Online Counselling Platform',
    category: 'web',
    categoryLabel: 'Web Development',
    description:
      'A web-based counseling system connecting clients with counselors, enabling secure registration, appointment scheduling, chat/video sessions, and payments. Built with React.js, Next.js, Tailwind CSS, and MongoDB.',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'MongoDB'],
    image: 'https://opengraph.githubassets.com/1/mercy306/counselconnect',
    github: 'https://github.com/mercy306/counselconnect',
    live: 'https://counselconnect-x11aj4dtf-mihirets-projects-e5f11159.vercel.app',
    featured: false,
  },
  {
    id: 'school-mgmt',
    title: 'School Management System',
    category: 'web',
    categoryLabel: 'Web Development',
    description:
      'A comprehensive school management web application for handling student records, grades, attendance tracking, and administrative workflows using PHP, HTML, CSS, and MySQL.',
    tags: ['PHP', 'HTML/CSS', 'MySQL', 'JavaScript'],
    image: 'https://opengraph.githubassets.com/1/mercy306/school-management',
    github: 'https://github.com/mercy306/school-management',
    live: null,
    featured: false,
  },
  {
    id: 'harar-guide',
    title: 'Harar Cultural Guide',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    description:
      "A cross-platform mobile app showcasing Harar's rich UNESCO cultural heritage with audio guides and interactive navigation, built with React Native.",
    tags: ['React Native', 'JavaScript', 'Mobile UI'],
    image: 'https://opengraph.githubassets.com/1/mercy306/harar-cultural-guide',
    github: 'https://github.com/mercy306/harar-cultural-guide',
    live: 'https://harar-cultural-guide-k92c81770-mihirets-projects-e5f11159.vercel.app',
    featured: false,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-28 relative bg-[#32353C] overflow-hidden">
      {/* Ambient background orb */}
      <div className="glowing-orb glowing-orb-magenta w-[600px] h-[600px] top-1/4 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header & Intro Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
              My <br />
              <span className="text-[#66D9ED]">Work</span>
            </h2>
            <div className="w-16 h-1 bg-[#DF058D] rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-300 font-mono-code text-sm leading-relaxed"
          >
            <p>
              Architected and deployed full-stack web and mobile applications. Specializing in React, Next.js, React Native, and database integrations.
            </p>
          </motion.div>
        </div>

        {/* Category Filter Tabs (Isotope style) */}
        <div className="flex items-center gap-4 mb-12 font-mono-code text-sm border-b border-[#181b2c] pb-4">
          <span className="text-slate-500 text-xs uppercase tracking-wider">Filter by:</span>
          <button
            onClick={() => setActiveFilter('all')}
            className={`transition-colors font-medium px-3 py-1 rounded ${
              activeFilter === 'all'
                ? 'text-[#66D9ED] bg-[#24262B] border border-[#3a3d47]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All <span className="text-xs text-slate-500">({projects.length})</span>
          </button>
          <span className="text-slate-600">/</span>
          <button
            onClick={() => setActiveFilter('web')}
            className={`transition-colors font-medium px-3 py-1 rounded ${
              activeFilter === 'web'
                ? 'text-[#66D9ED] bg-[#24262B] border border-[#3a3d47]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Web Development
          </button>
          <span className="text-slate-600">/</span>
          <button
            onClick={() => setActiveFilter('game')}
            className={`transition-colors font-medium px-3 py-1 rounded ${
              activeFilter === 'game'
                ? 'text-[#66D9ED] bg-[#24262B] border border-[#3a3d47]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Games
          </button>
          <span className="text-slate-600">/</span>
          <button
            onClick={() => setActiveFilter('mobile')}
            className={`transition-colors font-medium px-3 py-1 rounded ${
              activeFilter === 'mobile'
                ? 'text-[#66D9ED] bg-[#24262B] border border-[#3a3d47]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Mobile Apps
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`tamal-card rounded-xl overflow-hidden group flex flex-col justify-between ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Image Preview with Hover Zoom & Color Overlay */}
              <div className="relative h-60 sm:h-72 overflow-hidden bg-[#161826]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                {/* Gradient color overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Show Project Drawer Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="px-3 py-1 rounded bg-[#10121d]/90 border border-[#23273e] text-[#66D9ED] font-mono-code text-xs">
                    {project.categoryLabel}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-[#161826]/90 border border-[#23273e] text-white hover:text-[#66D9ED] hover:border-[#66D9ED] transition-all"
                      aria-label="GitHub Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-[#2C49D8] text-white hover:bg-[#3856ed] transition-all"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Details Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#66D9ED] transition-colors flex items-center gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#66D9ED]" />
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#181b2c]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-[#161826] border border-[#23273e] text-slate-300 font-mono-code text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
