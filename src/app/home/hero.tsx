'use client'

import { ArrowRightIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import AnimatedShinyText from '~/components/ui/animated-shiny-text'
import { cn } from '~/lib/utils'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            className="z-10 mb-4 flex items-center justify-center"
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
                <span>✨ Introducing Arif</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </motion.div>

          <motion.h2
            className="mb-6 text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-nevia text-[5rem] font-medium tracking-wide text-indigo-600">
              ARIF
            </span>
            {' - '}
            <span>Your Personal Data Analyst</span>
          </motion.h2>

          <motion.p
            className="mx-auto mb-8 max-w-2xl text-xl text-gray-600"
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
                href="/coming-soon"
                className="rounded-xl bg-indigo-600 px-8 py-2 font-semibold text-white transition-colors hover:bg-indigo-700"
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

