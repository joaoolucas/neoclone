'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface DreamButtonProps {
  onClick: () => void
  isLoading: boolean
}

export function DreamButton({ onClick, isLoading }: DreamButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline"
        className={`
          font-mono text-xs tracking-wider
          border-cyan-500 text-cyan-500
          hover:bg-cyan-500 hover:text-black
          focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50
          transition-all duration-300 ease-in-out
          relative overflow-hidden
          ${isLoading ? 'cursor-not-allowed opacity-50' : ''}
        `}
        onClick={onClick}
        disabled={isLoading}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className={`${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          dream
        </span>
        <span className={`absolute inset-0 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          {isLoading ? 'dreaming...' : 'initiate'}
        </span>
        {isLoading && (
          <motion.div
            className="absolute inset-0 bg-cyan-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5, ease: "linear" }}
            style={{ transformOrigin: "left" }}
          />
        )}
      </Button>
    </motion.div>
  )
}

