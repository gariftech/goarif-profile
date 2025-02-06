'use client'

import { Book, ChartPie, UsersRound, WandSparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { AnimateFlow } from './partials/animate-flow'

const features = [
  {
    icon: WandSparkles,
    title: 'Upload your data',
    description: 'Excel, csv, PDF, PowerPoint, Word, audio and video files.',
  },
  {
    icon: UsersRound,
    title: 'Run your analysis',
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
    <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Innovate your data handling strategies
          </h2>
          <p className="mb-10 text-xl text-gray-600">
            Whether you’re solving business challenges or conducting groundbreaking research, Arif
            is here to help you every step of the way.{' '}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                className="flex min-w-[250px] max-w-[300px] flex-1 flex-col items-center justify-center rounded-xl p-6 transition-all duration-500 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                  <item.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-center text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <AnimateFlow />
        </div>
      </div>
    </div>
  )
}
