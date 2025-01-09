'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { BackgroundEffect } from '../components/background-effect'
import { DreamButton } from '../components/dream-button'

export default function Page() {
  const [isEffectActive, setIsEffectActive] = useState(false)

  const handleDreamClick = () => {
    setIsEffectActive(true)
    // Reset the effect after animation completes
    setTimeout(() => setIsEffectActive(false), 5000)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <BackgroundEffect isActive={isEffectActive} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-2 mb-8"
      >
        <h1 className="text-sm font-mono tracking-wider">
          HexNode
          <br />
          CA-SOON
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative border border-cyan-500/20 p-8 mb-8"
      >
        <div className="w-[300px] h-[300px] relative flex items-center justify-center">
          <Image
            src="/neonixclone.gif"
            alt="HexNode AI glitch illustration"
            width={300}
            height={300}
            className="object-contain"
            unoptimized
            priority
            onError={(e) => {
              console.error('Error loading image:', e);
            }}
          />
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="font-mono text-xs opacity-60 leading-relaxed">
            NO.afsnchypa ndejehzni
            <br />
            dyakupi chinkayuy&
            <br />
            [736F727275]
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <DreamButton onClick={handleDreamClick} isLoading={isEffectActive} />
      </motion.div>
    </div>
  )
}

