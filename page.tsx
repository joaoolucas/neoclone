'use client'

import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { BackgroundEffect } from './components/background-effect'
import { DreamButton } from './components/dream-button'

export default function Page() {
  const [isEffectActive, setIsEffectActive] = useState(false)

  const handleDreamClick = () => {
    setIsEffectActive(true)
    // Reset the effect after animation completes
    setTimeout(() => setIsEffectActive(false), 5000)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <Head>
        <title>Neonix AI</title>
        <meta name="description" content="Neonix AI - Cyberpunk-inspired artificial intelligence" />
        <meta property="og:title" content="Neonix AI" />
        <meta property="og:description" content="Experience the future with Neonix AI" />
        <meta name="twitter:title" content="Neonix AI" />
        <meta name="twitter:description" content="Cyberpunk meets AI in Neonix" />
      </Head>

      <BackgroundEffect isActive={isEffectActive} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-2 mb-8"
      >
        <h1 className="text-sm font-mono tracking-wider">
          Neonix AI
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shrimp-utdB8GuLLE5ZIxtJ9pjUqKmXBlBEQ2.gif"
            alt="Neonix AI glitch shrimp illustration"
            width={300}
            height={300}
            className="invert object-contain"
            unoptimized
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

