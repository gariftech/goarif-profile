import Layout from '~/components/layout'
import Cta from './home/cta'
import Faq from './home/faq'
import Features from './home/features'
import Hero from './home/hero'
import Stats from './home/stats'

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <Stats />

        {/* Features Section */}
        <Features />

        {/* CTA Section */}
        <Cta />

        {/* FAQ Section */}
        <Faq />
      </div>
    </Layout>
  )
}
