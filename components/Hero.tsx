'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    type Particle = {
      x: number
      y: number
      w: number
      h: number
      speed: number
      opacity: number
      delay: number
    }

    const makeParticles = (): Particle[] => {
      const count = Math.max(40, Math.floor((canvas.width * canvas.height) / 15000))
      return Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        w: Math.random() * 2 + 1,
        h: Math.random() * 2 + 1,
        speed: Math.random() * 0.4 + 0.15,
        opacity: Math.random() * 0.25 + 0.05,
        delay: Math.random() * 80,
      }))
    }

    let particles = makeParticles()
    let frame = 0
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        if (frame < p.delay) return
        p.y -= p.speed
        if (p.y < -10) p.y = canvas.height + 10
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(p.x, p.y, p.w, p.h)
      })
      frame++
      animId = requestAnimationFrame(draw)
    }
    draw()

    const handleResize = () => {
      resize()
      particles = makeParticles()
      frame = 0
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative h-screen bg-[#0a0a0a] overflow-hidden flex flex-col">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Geometric overlay lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 border-t border-[#27272a]"
          style={{ top: '25%', transformOrigin: 'left center' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="absolute left-0 right-0 border-t border-[#27272a]"
          style={{ top: '75%', transformOrigin: 'left center' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="absolute top-0 bottom-0 border-l border-[#27272a]"
          style={{ left: '25%', transformOrigin: 'top center' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="absolute top-0 bottom-0 border-l border-[#27272a]"
          style={{ left: '75%', transformOrigin: 'top center' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>

      {/* Center hero content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-8 text-center">
        <div className="max-w-5xl">
          <motion.p
            className="text-[#a1a1aa] text-xs uppercase tracking-[0.3em] mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Portfolio
          </motion.p>

          <motion.h1
            className="text-[#fafafa] font-bold leading-[0.92] mb-8"
            style={{ fontSize: 'clamp(40px, 9vw, 96px)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Khoa<br />Le
          </motion.h1>

          <motion.p
            className="text-[#a1a1aa] text-lg max-w-xl mx-auto mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            Graduate researcher & full-stack developer building data-driven tools at the intersection of software engineering and applied science.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <a
              href="#projects"
              className="bg-[#fafafa] text-[#0a0a0a] text-sm font-medium px-8 py-3 hover:bg-[#d4d4d8] transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#27272a] text-[#fafafa] text-sm font-medium px-8 py-3 hover:border-[#52525b] transition-colors"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative z-10 border-t border-[#27272a] px-8 py-4 flex justify-between items-center">
        <span className="text-[#a1a1aa] text-xs tracking-widest uppercase">
          Available for opportunities
        </span>
        <span className="text-[#a1a1aa] text-xs tracking-widest uppercase">
          Scroll to explore ↓
        </span>
      </div>
    </section>
  )
}
