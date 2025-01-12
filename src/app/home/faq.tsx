'use client'

import { motion } from 'motion/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

const faqs = [
  {
    question: 'What types of data can I analyze?',
    answer: 'Structured (e.g., spreadsheets) and unstructured (e.g., text).',
  },
  {
    question: 'What kind of support is available?',
    answer: 'Tutorials, documentation, and customer support are always at hand.',
  },
  {
    question: 'How is my data kept secure?',
    answer: 'Advanced security measures like encryption and regular audits ensure protection.',
  },
  {
    question: 'Does Arif support predictive modeling?',
    answer: 'Yes, Arif’s predictive analytics features help uncover deeper insights.',
  },
  {
    question: 'Can Arif handle large datasets?',
    answer: 'Absolutely. Arif is built to efficiently manage and scale your data needs.',
  },
  {
    question: 'What does it cost?',
    answer: 'Flexible subscription plans and pay-as-you-go options to suit every need.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about the course
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              key={index}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-indigo-900 font-semibold">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
