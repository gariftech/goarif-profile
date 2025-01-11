import Layout from '~/components/layout'
import Cta from './home/cta'
import Faq from './home/faq'
import Features from './home/features'
import Hero from './home/hero'
import HowItWork from './home/how-it-work'
import Stats from './home/stats'
import Testimony from './home/testimony'
import Started from './home/started'

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

        {/* How It Works Section */}
        <HowItWork />

        {/* Testimony Section */}
        <Testimony />

        {/* CTA Section */}
        <Cta />

        {/* FAQ Section */}
        <Faq />

        {/* Started Section */}
        <Started />
      </div>
    </Layout>
  )
}
