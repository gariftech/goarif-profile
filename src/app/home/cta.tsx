'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import Ripple from '~/components/ui/ripple'

export default function Cta() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-10 via-gray-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border bg-background md:shadow-xl">
          <div className="z-10 w-full bg-indigo-600 rounded-2xl p-8 md:p-16 whitespace-pre-wrap text-center">
            <Ripple className="text-gray-200" />

            <motion.h2
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Committed to Data Privacy
            </motion.h2>

            <motion.p
              className="text-xl text-white mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <strong>Security:</strong> Robust encryption, access controls, and regular audits.
              <br />
              <strong>Compliance:</strong> Adheres to the GDPR regulations.
              <br />
              <strong>User Control:</strong> You control your data and its use.
              <br />
              <strong>Transparency:</strong> Clear policies on data collection and usage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="https://app.goarif.co">
                <Button className="rounded-xl">Try it Now</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
