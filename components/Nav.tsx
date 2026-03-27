'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-sm border-[#27272a]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <span className="text-[#fafafa] text-sm font-medium tracking-widest uppercase">
        Last Name First Name
      </span>
      <div className="hidden md:flex items-center gap-8">
        {['About', 'Projects', 'Resume', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[#a1a1aa] text-xs uppercase tracking-widest hover:text-[#fafafa] transition-colors"
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-[#fafafa] text-[#0a0a0a] text-xs font-medium px-4 py-2 hover:bg-[#d4d4d8] transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  )
}
