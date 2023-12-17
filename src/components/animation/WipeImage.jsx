import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'


const WipeImage = ({ children }) => {
  const controls = useAnimation()

  const overlayAnimation = {
    x: ['0%', '100%'],
    transition: {
      duration: 0.8,
    },
  }

  useEffect(() => {
    controls.start(overlayAnimation)
  }, [controls])

  return (
    <div className="relative overflow-hidden">
      <motion.div
        animate={controls}
        className="absolute top-0 left-0 bottom-0 right-0 bg-slate-primary"
        style={{ originX: 0.5 }}
      />
      {children}
    </div>
  )
}

export default WipeImage
