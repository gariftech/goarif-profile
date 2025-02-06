import { Metadata } from 'next'
import { Separator } from '~/components/ui/separator'

export const metadata: Metadata = {
  title: 'Go Arif | About - AI-Powered Data Analytics Platform - Simplifying Insights',
  description:
    'Discover how Go Arif is revolutionizing data analysis with AI-powered tools. Learn more about our mission, vision, and values, and how we can help you make data-driven decisions with ease.',
}

export default function AboutPage() {
  return (
    <section className="container flex-1 py-10">
      <h1 className="mb-6 text-4xl font-bold">About</h1>
      <Separator className="my-4" />
      <div className="space-y-4 text-base">
        <p>
          Arif offers a cost-effective and time-efficient solution for professionals, particularly
          if you are:
        </p>

        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Marketing Professionals:</strong> managers and brand managers, who need to
            understand consumer behavior, segment their audience, and market sentiments
          </li>
          <li>
            <strong>Researchers:</strong> market researchers and academics who require tools for
            in-depth data analysis, charting and reporting
          </li>
          <li>
            <strong>Business Strategists:</strong> brand principals, business analysts, and product
            managers who need data-driven insights to make informed decisions about product
            development, market positioning, and growth strategies.
          </li>
          <li>
            <strong>Public Communicators:</strong> journalists and PR professionals who need to
            analyze data, track trends, and understand public sentiment to inform their reporting
            and communication strategies.
          </li>
        </ul>

        <p>Ready to Experience Arif? Take the first step towards smarter data-driven decisions:</p>

        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Try It Free:</strong> Explore Arif&apos;s features at no cost. Get Started Now.
          </li>
          <li>
            <strong>Book a Demo:</strong> See Arif in action and learn how it can work for you.
            Schedule a Demo.
          </li>
          <li>
            <strong>Contact Us:</strong> Have questions? Our team is here to help. Reach Out Today
          </li>
        </ul>

        <p>
          Experience Arif and transform the way you work with data.
          <br />
          Whether you’re solving business challenges or conducting groundbreaking research, Arif is
          here to help you every step of the way.
        </p>
      </div>
    </section>
  )
}
