'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, MapPin, ExternalLink, Briefcase, GraduationCap, Building2 } from 'lucide-react';

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const experiences = [
    {
      role: 'Front-end Developer Intern',
      company: 'Ethiopian Road Administration (ERA)',
      location: 'Addis Ababa, Ethiopia',
      period: '2024',
      link: 'https://www.era.gov.et',
      type: 'work',
      icon: Building2,
      description:
        'Collaborated with the IT & engineering software teams to design, develop, and maintain responsive front-end interfaces for internal tools and public portals. Connected React and HTML/CSS components to SQL database backends to streamline administrative workflows.',
      skills: ['JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'PHP', 'MySQL'],
    },
    {
      role: 'Full Stack Web & Mobile Developer',
      company: 'Haramaya University Capstone Project',
      location: 'Haramaya, Ethiopia',
      period: '2023 - 2025',
      link: 'https://github.com/mercy306',
      type: 'work',
      icon: Briefcase,
      description:
        'Engineered the Online Counselling Platform (CounselConnect) featuring user authentication, booking scheduling, real-time chat UI, and MongoDB database storage. Developed the Harar Cultural Guide mobile app using React Native.',
      skills: ['React.js', 'Next.js', 'React Native', 'Tailwind CSS', 'MongoDB', 'Node.js'],
    },
    {
      role: 'B.S. in Computer Science',
      company: 'Haramaya University',
      location: 'Haramaya, Ethiopia',
      period: '2022 - 2025',
      link: 'https://www.haramaya.edu.et',
      type: 'education',
      icon: GraduationCap,
      description:
        'Completed Bachelor of Science degree in Computer Science with distinction. Specialized in Software Engineering, Web Architecture, Database Systems, Data Structures & Algorithms, and Object-Oriented Programming.',
      skills: ['Java', 'C++', 'Python', 'Database Systems', 'Software Engineering', 'Networking'],
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-28 relative bg-[#24262B] overflow-hidden">
      {/* Background glow orb */}
      <div className="glowing-orb glowing-orb-yellow w-[500px] h-[500px] bottom-0 left-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            Professional <br />
            <span className="text-[#DF058D]">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-[#66D9ED] rounded-full" />
        </motion.div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {experiences.map((item, index) => {
            const isOpen = openIndex === index;
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.role + item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="tamal-card rounded-xl overflow-hidden border border-[#1f2233]"
              >
                {/* Header Title Row */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 bg-[#2c2f36] hover:bg-[#32353C] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-[#181a2b] border border-[#262940] text-[#66D9ED]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                        {item.role}{' '}
                        <span className="text-[#66D9ED] font-normal">@ {item.company}</span>
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-mono-code text-xs sm:text-sm text-slate-400 bg-[#161826] px-3 py-1 rounded border border-[#23273e]">
                      {item.period}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-[#181a2b] border border-[#262940] flex items-center justify-center text-slate-300 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#DF058D]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Accordion Body */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 pt-2 border-t border-[#181b2c] bg-[#0d0e17]"
                  >
                    <div className="flex flex-wrap gap-4 items-center font-mono-code text-xs text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-[#DF058D]" />
                        {item.location}
                      </span>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[#66D9ED] hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>website</span>
                        </a>
                      )}
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#181b2c]">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded bg-[#141624] border border-[#23273e] text-slate-300 font-mono-code text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
