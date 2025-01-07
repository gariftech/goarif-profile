'use client'

import { motion } from 'motion/react'
import Ripple from '~/components/ui/ripple'

const stats = [
  {
    title: '99.9%',
    description: 'Accuracy Rate',
  },
  {
    title: '10x',
    description: 'Faster Analysis',
  },
  {
    title: '24/7',
    description: 'Real-time Processing',
  },
]

export default function Stats() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="z-10 w-full bg-indigo-600 p-8 md:p-16 whitespace-pre-wrap text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Ripple className="text-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.title}</div>
                <div className="text-indigo-200">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
