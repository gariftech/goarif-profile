'use client'

import React from 'react'
import { motion } from 'motion/react'
import { AnimateFlow } from './partials/animate-flow'

export default function HowItWork() {
  return (
    <div className="py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 mb-10">Learn how to get started</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <AnimateFlow />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
