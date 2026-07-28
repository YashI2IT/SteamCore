import React from 'react'
import { motion as Motion } from 'framer-motion'
import { staggerContainer, fadeUpVariant } from './motion'

export function Reveal({ children, className, element = 'section' }) {
  const Component = Motion[element] || Motion.section
  
  return (
    <Component
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        // Wrap child in a Motion.div configured to fadeUp, UNLESS it's already a Motion component
        // But since we can't easily detect that, wrapping standard DOM elements is fine.
        return <Motion.div variants={fadeUpVariant}>{child}</Motion.div>
      })}
    </Component>
  )
}

export function RevealGrid({ children, className }) {
  return (
    <Motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        return <Motion.div variants={fadeUpVariant} className="h-full w-full">{child}</Motion.div>
      })}
    </Motion.div>
  )
}
