import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Go Arif Term of Service: AI-Powered Data Analytics Platform  | Easy-to-use Insights',
  description:
    `Discover Go Arif's AI-powered data analytics platform Terms of Service. Read how our platform empowers professionals, researchers, academics, and journalists to unlock insights from their data. Learn more about our terms and get started today.`,
}

export default function TermOfServicePage() {
  return (
    <section className="container py-10 flex-1">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
        <p>
          By accessing or using Arif Data Analytics services, you agree to be bound by these Terms
          of Service and all applicable laws and regulations.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Services</h2>
        <p>
          We provide data analytics and consulting services. We reserve the right to modify,
          suspend, or discontinue any part of our services at any time.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide accurate information</li>
          <li>Maintain confidentiality of account credentials</li>
          <li>Use services in compliance with applicable laws</li>
          <li>Respect intellectual property rights</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
        <p>
          All content, features, and functionality of our services are owned by Arif Data Analytics
          and are protected by international copyright, trademark, and other intellectual property
          laws.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
        <p>
          We shall not be liable for any indirect, incidental, special, consequential, or punitive
          damages resulting from your use of our services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use of our services
          after such modifications constitutes acceptance of the updated terms.
        </p>
      </div>
    </section>
  )
}
