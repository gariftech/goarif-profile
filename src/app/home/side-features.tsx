'use client'

import { IconCircleCheck } from '@tabler/icons-react'
import { motion } from 'motion/react'
import Image from 'next/image'

const features = [
  {
    title: 'Marketing Professionals',
    desc: 'Managers and brand managers, who need to understand consumer behavior, segment their audience, and market sentiments.',
  },
  {
    title: 'Researchers',
    desc: 'Market researchers and academics who require tools for in-depth data analysis, charting and reporting.',
  },
  {
    title: 'Business Strategists',
    desc: 'Brand principals, business analysts, and product managers who need data-driven insights to make informed decisions about product development, market positioning, and growth strategies.',
  },
  {
    title: 'Public Communicators',
    desc: 'Journalists and PR professionals who need to analyze data, track trends, and understand public sentiment to inform their reporting and communication strategies.',
  },
]

export default function SideFeatures() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="rounded-lg p-6">
            <h3 className="mb-4 text-3xl font-semibold">Ideal for Professionals</h3>
            <p className="mb-4">Arif offers a cost-effective and time-efficient solution for:</p>
            <div className="space-y-3">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-2 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                >
                  <IconCircleCheck className="h-6 w-6 flex-shrink-0 text-indigo-600" />
                  <p className="text-base">
                    <span className="font-bold">{item.title}:</span> {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[300px] w-full">
            <Image
              src="/assets/images/businessman-analyze-2.jpg"
              alt="Businessman analyzing data"
              className="rounded-lg object-cover shadow-md"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
