import Layout from '~/components/layout'
import Cta from './home/cta'
import Faq from './home/faq'
import Features from './home/features'
import Hero from './home/hero'
import HowItWork from './home/how-it-work'
import SideFeatures from './home/side-features'
import Started from './home/started'
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

        {/* Side Features */}
        <SideFeatures />

        {/* How It Works Section */}
        <HowItWork />

        {/* Started Section */}
        <Started />

        {/* Testimony Section */}
        {/* <Testimony /> */}

        {/* FAQ Section */}
        <Faq />

        {/* CTA Section */}
        <Cta />
      </div>
    </Layout>
  )
}
