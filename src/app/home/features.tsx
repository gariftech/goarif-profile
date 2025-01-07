'use client'

import { IconCpu, IconFocusAuto } from '@tabler/icons-react'
import { BarChart3, Bot, Database, LineChart, Shield } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import ShineBorder from '~/components/ui/shine-border'

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
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
    icon: BarChart3,
    title: 'Explore and Discover',
    description:
      'Arif provides tools to dive into your data, translate and uncover patterns, turn insights into action.',
  },
  {
    icon: Database,
    title: 'Templates and Wizards by User Type',
    description:
      'We provide survey questionnaires, customer segmentation, sentiment analysis, predictive modeling, churn scoring, and tabular analysis.',
  },
  {
    icon: LineChart,
    title: 'Visual Storytelling',
    description:
      'Communicate your findings effectively with powerful visualization tools that create impactful charts, dashboards, and graphs.',
  },
  {
    icon: Shield,
    title: 'Tailored Analysis',
    description:
      'Use pre-built templates and guided wizards customized for your field and make it easy to get started.',
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            >
              <FeatureCard
                icon={Bot}
                title="Machine Learning"
                description="The platform supports supervised learning for tasks like regression, including predictive and churn analysis, as well as classification for sentiment analysis. It also leverages unsupervised learning for clustering, such as customer segmentation, and dimensionality reduction to uncover hidden patterns in data."
              />
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <FeatureCard
                  icon={IconCpu}
                  title="Natural Language Processing (NLP):"
                  description="The platform provides sentiment analysis to gauge emotions in text data, alongside text mining capabilities to extract themes and topics from unstructured data, enabling deeper insights and understanding of textual information."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <FeatureCard
                  icon={IconFocusAuto}
                  title="Automated Data Preparation"
                  description="Data cleaning and transformation tasks like handling missing values, scaling features, and engineering new ones."
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
