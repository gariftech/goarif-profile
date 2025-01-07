import { Metadata } from 'next'
import { Separator } from '~/components/ui/separator'

export const metadata: Metadata = {
  title: 'Go Arif | About - AI-Powered Data Analytics Platform - Simplifying Insights',
  description:
    'Discover how Go Arif is revolutionizing data analysis with AI-powered tools. Learn more about our mission, vision, and values, and how we can help you make data-driven decisions with ease.',
}

export default function AboutPage() {
  return (
    <section className="container py-10 flex-1">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      <Separator className="my-4" />
      <p className="text-base">
        At Go Arif, we&apos;re revolutionizing data analytics with our AI-powered platform. Our
        mission is to make advanced data analysis accessible to everyone, regardless of their
        technical background. We empower business professionals, researchers, academics, and
        journalists to uncover valuable insights from their data, driving smarter decision-making.
        Our platform combines cutting-edge artificial intelligence with user-friendly interfaces,
        ensuring that complex data analysis is both powerful and intuitive. We&apos;re committed to
        ethical data practices, maintaining the highest standards of data privacy and security while
        fostering innovation in the field of AI-driven analytics.
      </p>
    </section>
  )
}
