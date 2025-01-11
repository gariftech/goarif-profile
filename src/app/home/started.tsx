'use client'

import { IconAnalyze, IconReport } from '@tabler/icons-react'
import clsx from 'clsx'
import { Bot, ChartNoAxesCombined, Languages, Lightbulb, User } from 'lucide-react'
import { motion } from 'motion/react'
import { getBuiltinRequestContext } from 'next/dist/server/after/builtin-request-context'
import React from 'react'
import ShineBorder from '~/components/ui/shine-border'

export function StartedCard({
  icon: Icon,
  title,
  description,
  buttonText,
  shadow,
}: {
  icon: React.ElementType
  title: string
  description: string
  buttonText: string
  shadow?: boolean
}) {
  return (
    <div
      className={clsx(
        'p-6 bg-white rounded-xl h-full',
        shadow && 'shadow-md hover:shadow-xl transition-shadow'
      )}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
      >
        {buttonText}
      </button>
    </div>
  )
}

const features = [
  {
    icon: Lightbulb,
    title: 'Try It Free',
    description:
      "Explore Arif's features at no cost. ",
    buttonText: 'Get Started Now',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Book a Demo',
    description:
      'See Arif in action and learn how it can work for you. ',
    buttonText: 'Schedule a Demo',
  },
  {
    icon: User,
    title: 'Contact Us',
    description:
      'Have questions? Our team is here to help. ',
    buttonText: 'Reach Out Today',
  },
]

export default function Started() {
  return (
    <>
      <div className="py-20 bg-gradient-to-br from-purple-100 via-white to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Experience Arif?
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Take the first step towards smarter data-driven decisions
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                >
                  <ShineBorder
                    className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-0"
                    color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                  >
                    <div className="whitespace-pre-wrap">
                      <StartedCard
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        buttonText={feature.buttonText}
                      />
                    </div>
                  </ShineBorder>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
