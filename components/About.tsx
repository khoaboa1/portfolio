'use client'

import { motion } from 'framer-motion'

const skills: Record<string, string[]> = {
  Languages: ['Language 1', 'Language 2', 'Language 3'],
  Frontend: ['Framework 1', 'Framework 2', 'Framework 3'],
  'Backend & Data': ['Tool 1', 'Tool 2', 'Tool 3'],
  'DevOps & Other': ['Tool 1', 'Tool 2', 'Tool 3'],
}

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-32 px-8 border-t border-[#27272a]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-[#a1a1aa] text-xs uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About
        </motion.p>
        <motion.h2
          className="text-[#fafafa] font-bold mb-16"
          style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: bio + education */}
          <div className="space-y-10">
            <div>
              <p className="text-[#52525b] text-xs uppercase tracking-widest mb-3">Bio</p>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">
                Add your personal bio here. Describe your background, interests, and what drives you professionally.
              </p>
            </div>

            <div>
              <p className="text-[#52525b] text-xs uppercase tracking-widest mb-5">Education</p>
              <div className="space-y-5">
                <div className="border-l border-[#27272a] pl-5">
                  <p className="text-[#fafafa] text-sm font-medium">Degree, Major</p>
                  <p className="text-[#a1a1aa] text-xs mt-1">University Name — Year</p>
                  <p className="text-[#52525b] text-xs mt-0.5">GPA: X.XX</p>
                </div>
                <div className="border-l border-[#27272a] pl-5">
                  <p className="text-[#fafafa] text-sm font-medium">Degree, Major</p>
                  <p className="text-[#a1a1aa] text-xs mt-1">University Name — Year</p>
                  <p className="text-[#52525b] text-xs mt-0.5">GPA: X.XX</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#52525b] text-xs uppercase tracking-widest mb-2">Location</p>
              <p className="text-[#a1a1aa] text-sm">City, State</p>
            </div>
          </div>

          {/* Right: skills */}
          <div>
            <p className="text-[#52525b] text-xs uppercase tracking-widest mb-6">Skills</p>
            <div className="space-y-7">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-[#3f3f46] text-xs uppercase tracking-widest mb-3">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[#27272a] text-[#a1a1aa] text-xs px-3 py-1 hover:border-[#52525b] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
