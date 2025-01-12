'use client'

import { ChartPie, UsersRound, WandSparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { AnimateFlow } from './partials/animate-flow'

const features = [
  {
    icon: WandSparkles,
    title: 'Upload a guide',
    description: 'Add your discussion guide to Outset and customize your AI interviewer.',
  },
  {
    icon: UsersRound,
    title: 'Recruit your participants',
    description:
      "Recruit with Outset's panel, integrate with your own panel partners, or share with your own users.",
  },
  {
    icon: ChartPie,
    title: 'Discover insights with AI',
    description:
      'Watch the AI Interviewer dig deep with participants and pull out what matters most.',
  },
]

export default function HowItWork() {
  return (
    <div className="py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 mb-10">Learn how to get started</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((item, index) => {
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                  className="p-6 hover:bg-white rounded-xl h-full flex flex-col items-center justify-center hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </motion.div>
              )
            })}
          </div>

          <AnimateFlow />
        </div>
      </div>
    </div>
  )
}
