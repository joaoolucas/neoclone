'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function BackgroundEffect({ isActive }: { isActive: boolean }) {
  const [elements, setElements] = useState<Array<{
    type: 'particle' | 'line' | 'glitch';
    x: number;
    y: number;
    delay: number;
    duration: number;
    size?: number;
  }>>([])

  useEffect(() => {
    if (isActive) {
      const newElements = [
        ...Array.from({ length: 50 }, () => ({
          type: 'particle' as const,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: Math.random() * 0.5,
          duration: 1 + Math.random(),
          size: Math.random() * 3 + 1,
        })),
        ...Array.from({ length: 10 }, () => ({
          type: 'line' as const,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: Math.random() * 0.5,
          duration: 0.5 + Math.random() * 0.5,
        })),
        ...Array.from({ length: 5 }, () => ({
          type: 'glitch' as const,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: Math.random() * 0.5,
          duration: 0.2 + Math.random() * 0.3,
        })),
      ]
      setElements(newElements)
    }
  }, [isActive])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((el, i) => {
        switch (el.type) {
          case 'particle':
            return (
              <motion.div
                key={`particle-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 2],
                  x: [el.x - 50, el.x, el.x + 50],
                  y: [el.y - 50, el.y, el.y + 50],
                }}
                transition={{
                  duration: el.duration,
                  delay: el.delay,
                  ease: "easeOut",
                }}
                className="absolute bg-orange-400 rounded-full"
                style={{ width: el.size, height: el.size }}
              />
            )
          case 'line':
            return (
              <motion.div
                key={`line-${i}`}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0],
                  translateX: [0, 100, 100, 200],
                }}
                transition={{
                  duration: el.duration,
                  delay: el.delay,
                  ease: "linear",
                }}
                className="absolute h-px bg-orange-500"
                style={{ left: el.x, top: el.y, width: 100 }}
              />
            )
          case 'glitch':
            return (
              <motion.div
                key={`glitch-${i}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0, 1, 0],
                  x: [el.x, el.x + 10, el.x - 10, el.x],
                }}
                transition={{
                  duration: el.duration,
                  delay: el.delay,
                  ease: "steps(3)",
                }}
                className="absolute font-mono text-red-500 text-xl"
                style={{ left: el.x, top: el.y }}
              >
                ERROR
              </motion.div>
            )
        }
      })}
    </div>
  )
}

