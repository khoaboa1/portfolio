'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Job Title',
    company: 'Company Name',
    period: 'Month Year – Month Year',
    description: 'Describe what you did and what you achieved. Include quantified impact where possible.',
    tech: ['Tech 1', 'Tech 2', 'Tech 3'],
  },
  {
    role: 'Job Title',
    company: 'Company Name',
    period: 'Month Year – Month Year',
    description: 'Describe what you did and what you achieved. Include quantified impact where possible.',
    tech: ['Tech 1', 'Tech 2', 'Tech 3'],
  },
  {
    role: 'Job Title',
    company: 'Company Name',
    period: 'Month Year – Month Year',
    description: 'Describe what you did and what you achieved. Include quantified impact where possible.',
    tech: ['Tech 1', 'Tech 2', 'Tech 3'],
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
            href="/resume.pdf"
            className="border border-[#27272a] text-[#a1a1aa] text-xs px-5 py-2.5 hover:border-[#52525b] hover:text-[#fafafa] transition-all uppercase tracking-widest"
          >
            Download PDF ↓
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
                <p className="text-[#71717a] text-sm leading-relaxed mb-5">{exp.description}</p>
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
