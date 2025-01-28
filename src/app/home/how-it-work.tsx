'use client'

import { Book, ChartPie, UsersRound, WandSparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { AnimateFlow } from './partials/animate-flow'
import { cn } from '~/lib/utils'

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
      'Take advantage of pre-built templates and guided prompts customized for your field.',
  },
  {
    icon: ChartPie,
    title: 'Discover insights with AI',
    description:
      'AI streamlines data exploration, quickly uncovering patterns, trends, and correlations.',
  },
  {
    icon: Book,
    title: 'Effortlessly Reporting',
    description:
      'Automatically integrate insights into professional report templates, saving time for strategic tasks.',
  },
]

export default function HowItWork() {
  return (
    <div className="py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Innovate your data handling strategies
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Whether you’re solving business challenges or conducting groundbreaking research, Arif
            is here to help you every step of the way.{' '}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((item, index) => {
              const isLastItem = index === features.length - 1
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                  className={cn(
                    'p-6 hover:bg-white rounded-xl h-full flex flex-col items-center justify-center hover:shadow-xl transition-all duration-500',
                    isLastItem && 'md:col-start-2'
                  )}
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
