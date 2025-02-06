'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export default function SideFeatures() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="rounded-lg p-6">
            <h3 className="mb-4 text-2xl font-semibold">Ideal for Professionals</h3>
            <p className="mb-4">Arif offers a cost-effective and time-efficient solution for:</p>
            <ul className="space-y-3">
              {[
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
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                >
                  <svg
                    className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div>
                    <span className="font-medium">{item.title}:</span> {item.desc}
                  </div>
                </motion.li>
              ))}
            </ul>
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
