'use client'

import { ArrowRightIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import AnimatedShinyText from '~/components/ui/animated-shiny-text'
import { cn } from '~/lib/utils'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <motion.div
            className="z-10 flex mb-4 items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={cn(
                'group rounded-full border border-black/5 bg-white text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-100 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Go Arif</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Personal
            <span className="text-indigo-600"> Data Analyst</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Imagine having a team of expert data analysts at your fingertips, available 24/7 to
            tackle any data challenge you face.
            <br />
            Arif brings the power of advanced AI and machine learning effortlessly convenient,
            making data analysis accessible for business professionals, researchers, academics and
            journalists, regardless of technical expertise.
          </motion.p>

          <div className="flex items-center justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="https://app.goarif.co"
                className="px-8 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
              >
                Try it Now
              </Link>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="https://youtube.com/watch?v=dQw4w9WgXcQ"
                className="px-8 py-2 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
              >
                Watch Demo
              </Link>
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
