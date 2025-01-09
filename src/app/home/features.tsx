'use client'

import { IconAnalyze, IconReport } from '@tabler/icons-react'
import clsx from 'clsx'
import { Bot, ChartNoAxesCombined, Languages, Lightbulb, User } from 'lucide-react'
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
    title: 'Customer Segment',
    description:
      'Segmentation fosters stronger customer relationships through personalized experiences, driving loyalty.',
  },
  {
    icon: IconAnalyze,
    title: 'Sentiment Analysis',
    description:
      'Pinpoint specific areas where customers are experiencing dissatisfaction & prioritize improvements.',
  },
  {
    icon: IconReport,
    title: 'Visualization Report',
    description:
      'Use powerful visualization tools and report template to effectively communicate findings.',
  },
  {
    icon: Languages,
    title: 'Transcribe & Translate',
    description: 'AI accelerates the process, significantly lowering costs.',
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
              Empowering Your Data Journey
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

      <div className="py-20 bg-gradient-to-br from-white via-indigo-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Arif&apos;s Advanced Technologies
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Advanced technologies, AI, and big data make data management and analysis more
              efficient.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-white rounded-xl h-full shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <ul className="text-gray-600 list-disc pl-6">
                <li>
                  Supervised learning for regression (predictive and churn analysis) and
                  classification (sentiment analysis).
                </li>
                <li>
                  Unsupervised learning for clustering (customer segmentation) and dimensionality
                  reduction.
                </li>
              </ul>
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-6 bg-white rounded-xl h-full shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Natural Language Processing (NLP)</h3>
                <ul className="text-gray-600 list-disc pl-6">
                  <li>Sentiment analysis to gauge emotions in text data.</li>
                  <li>Text mining to extract themes and topics from unstructured data.</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="p-6 bg-white rounded-xl h-full shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Automated Data Preparation</h3>
                <ul className="text-gray-600 list-disc pl-6">
                  <li>
                    Data cleaning and transformation tasks like handling missing values, scaling
                    features, and engineering new ones.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
