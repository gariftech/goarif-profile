'use client'

import { motion } from 'motion/react'
import Ripple from '~/components/ui/ripple'

const stats = [
  {
    title: '10x',
    description: 'Faster Analysis',
  },
  {
    title: '10x',
    description: 'Cost Savings',
  },
  {
    title: '24/7',
    description: 'Accessibility',
  },
]

export default function Stats() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="z-10 w-full whitespace-pre-wrap bg-indigo-600 p-8 text-center md:p-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Ripple className="text-gray-200" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                <div className="mb-2 text-4xl font-bold text-white">{stat.title}</div>
                <div className="font-semibold text-indigo-200">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
