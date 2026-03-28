'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Graduate Research Assistant',
    company: 'Tulane Hydroinformatics Lab — Tulane University, New Orleans, LA',
    period: 'March 2026 – Present',
    bullets: [
      'Contributing to the development of a browser-based platform for hydrological model analysis and evaluation.',
      'Optimizing system performance and improving responsiveness through code refactoring and efficient data handling.',
      'Designing and implementing UI/UX enhancements to improve usability across the platform.',
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'WebR', 'WebGPU'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Datahouse Asia — Ho Chi Minh City, Vietnam',
    period: 'May 2024 – August 2024',
    bullets: [
      "Modernized the Philippine's hospital system to improve tenant management.",
      'Improved user interface with UI/UX design, utilizing HTML/CSS, TypeScript, and ReactJS.',
      'Created patient-centered workflows enabling hospitals to share medical and treatment history across departments.',
    ],
    tech: ['ReactJS', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    role: 'R&D Research Assistant',
    company: 'Hanoi University of Industry — Ha Noi, Vietnam',
    period: 'September 2024 – December 2025',
    bullets: [
      'Assisted in migrating the flagship product from ASP.NET to ReactJS, enhancing user experience and code maintainability.',
      'Designed and implemented an interactive drag-and-drop room layout feature to simplify dorm room assignments.',
      'Optimized the dorm management system, increasing sign-ups by 25%.',
    ],
    tech: ['ReactJS', 'ASP.NET', 'Ant Design', 'Metronic'],
  },
]

export default function Resume() {
  return (
    <section id="resume" className="bg-[#0a0a0a] py-32 px-8 border-t border-[#27272a]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <motion.p
              className="text-[#a1a1aa] text-xs uppercase tracking-[0.3em] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.p>
            <motion.h2
              className="text-[#fafafa] font-bold"
              style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Resume
            </motion.h2>
          </div>
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#27272a] text-[#a1a1aa] text-xs px-5 py-2.5 hover:border-[#52525b] hover:text-[#fafafa] transition-all uppercase tracking-widest"
          >
            View Resume ↗
          </a>
        </div>

        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="border-t border-[#27272a] py-10 grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="pt-0.5">
                <p className="text-[#52525b] text-xs uppercase tracking-widest">{exp.period}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-[#fafafa] text-base font-medium mb-1">{exp.role}</h3>
                <p className="text-[#a1a1aa] text-sm mb-4">{exp.company}</p>
                <ul className="space-y-2 mb-5">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-[#71717a] text-sm leading-relaxed">
                      <span className="text-[#3f3f46] mt-1 flex-shrink-0">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-[#27272a] text-[#52525b] text-xs px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#27272a]" />
        </div>
      </div>
    </section>
  )
}
