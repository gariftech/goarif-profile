import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Go Arif Privacy Policy - Secure AI Data Analysis & Visualization',
  description:
    'Go Arif is committed to protecting your data privacy. Read our privacy policy for details on how we collect, store, and use your data securely and with transparency.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="container py-10 flex-1">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p>
          At Arif Data Analytics, we collect information that you provide directly to us, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name and contact information</li>
          <li>Business information</li>
          <li>Usage data and analytics</li>
          <li>Communication preferences</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p>We use the collected information for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Providing and improving our services</li>
          <li>Communicating with you about our services</li>
          <li>Analyzing usage patterns and trends</li>
          <li>Ensuring the security of our services</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Data Protection</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to data processing</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our contact
          page.
        </p>
      </div>
    </section>
  )
}
