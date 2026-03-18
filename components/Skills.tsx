'use client';

import { motion } from 'framer-motion';
import { Code, Database, Layout, Smartphone, Cloud, FileText } from 'lucide-react';

const skills = [
  { 
    name: 'Frontend Development', 
    icon: Code, 
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] 
  },
  { 
    name: 'Backend Development', 
    icon: Database, 
    items: ['Node.js', 'PHP', 'Python'] 
  },
  { 
    name: 'Databases', 
    icon: Database, 
    items: ['PostgreSQL', 'MySQL', 'MongoDB'] 
  },
  { 
    name: 'Mobile Development', 
    icon: Smartphone, 
    items: ['React Native'] 
  },
//{ 
   // name: 'UI/UX Design', 
  // icon: Layout, 
    //items: ['Figma', 'Responsive Design', 'Prototyping'] 
//  },
 // { 
   // name: 'Cloud & DevOps', 
   // icon: Cloud, 
    //items: ['AWS', 'Docker', 'CI/CD', 'Git'] 
 // },
  { 
    name: 'Office Tools', 
    icon: FileText, 
    items: ['MS Excel', 'MS Word', 'MS PowerPoint'] 
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-100 dark:bg-slate-950">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-100 via-slate-100 to-blue-100 dark:from-slate-900 dark:via-slate-950/10 dark:to-slate-950 -z-10"></div>
      
      {/* Decorative glow effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-500/30"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-8 rounded-xl shadow-lg border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg group-hover:shadow-xl group-hover:shadow-cyan-500/30 transition-all transform group-hover:scale-110">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 ml-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                  {skill.name}
                </h3>
              </div>
              
              <ul className="space-y-3 relative z-10">
                {skill.items.map((item, idx) => (
                  <motion.li 
                    key={item} 
                    className="text-gray-400 flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (idx * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2.5 h-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mr-3 animate-pulse"></span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-700 dark:text-slate-200 text-lg mb-4">
            Always learning and expanding my skill set
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-500/30"
          >
            Let's Work Together
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
