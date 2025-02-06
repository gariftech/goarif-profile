'use client'

import clsx from 'clsx'
import { ChartNoAxesCombined, Lightbulb, User } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import ShineBorder from '~/components/ui/shine-border'

type IProps = {
  icon: React.ElementType
  title: string
  description: string
  buttonText: string
  shadow?: boolean
}

export function StartedCard({ title, description, buttonText, shadow }: IProps) {
  return (
    <div
      className={clsx(
        'h-full w-full rounded-xl bg-white p-6',
        shadow && 'shadow-md transition-shadow hover:shadow-xl'
      )}
    >
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-indigo-700">
        {buttonText}
      </button>
    </div>
  )
}

const features = [
  {
    icon: Lightbulb,
    title: 'Try It Free',
    description: "Explore Arif's features at no cost. ",
    buttonText: 'Get Started Now',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Book a Demo',
    description: 'See Arif in action and learn how it can work for you. ',
    buttonText: 'Schedule a Demo',
  },
  {
    icon: User,
    title: 'Contact Us',
    description: 'Have questions? Our team is here to help. ',
    buttonText: 'Reach Out Today',
  },
]

export default function Started() {
  return (
    <>
      <div className="bg-gradient-to-br from-purple-100 via-gray-100 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <motion.h2
              className="mb-4 text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Experience{' '}
              <span className="font-nevia text-[3rem] tracking-wide text-indigo-600">ARIF</span>
              &nbsp;?
            </motion.h2>

            <motion.p
              className="mx-auto max-w-2xl text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Take the first step towards smarter data-driven decisions
            </motion.p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
                    className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-0 md:shadow-xl"
                    color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                  >
                    <div className="w-full whitespace-pre-wrap">
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
