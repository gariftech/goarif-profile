'use client'

import { IconAnalyze, IconReport } from '@tabler/icons-react'
import clsx from 'clsx'
import { ChartNoAxesCombined, Languages, Lightbulb, User } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import ShineBorder from '~/components/ui/shine-border'

export function FeatureCard({
  icon: Icon,
  title,
  description,
  shadow,
}: {
  icon: React.ElementType
  title: string
  description: string
  shadow?: boolean
}) {
  return (
    <div
      className={clsx(
        'p-6 bg-white rounded-xl h-full',
        shadow && 'shadow-md hover:shadow-xl transition-shadow'
      )}
    >
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

const features = [
  {
    icon: Lightbulb,
    title: 'Data Science and Machine Learning',
    description:
      'Excels at uncovering hidden patterns in vast datasets, revealing insights often missed by human analysis.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Predictive Analytics',
    description:
      'Helps businesses predict and proactively address challenges like customer churn & market trends. ',
  },
  {
    icon: User,
    title: 'Customer Segmentation',
    description:
      'Focus efforts on the most promising segments, driving higher conversion rates and better return on investment.',
  },
  {
    icon: IconAnalyze,
    title: 'Sentiment Analysis',
    description:
      'Pinpoint specific areas where customers are experiencing dissatisfaction & prioritize improvements.',
  },
  {
    icon: IconReport,
    title: 'Visualization & Reporting',
    description:
      'Use powerful visualization tools and report templates to effectively communicate findings and support storytelling.',
  },
  {
    icon: Languages,
    title: 'Transcribe & Translate',
    description:
      'Automating transcription with AI minimizes the need for human labor, improving cost efficiency.',
  },
]

export default function Features() {
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
              Empowering Your Data Journey with AI
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our AI-powered platform provides comprehensive tools to analyze and visualize your
              data
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
                      <FeatureCard
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
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
