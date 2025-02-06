import { Metadata } from 'next'
import Link from 'next/link'
import { Separator } from '~/components/ui/separator'
import { formatLocalDate } from '~/lib/date'

export const metadata: Metadata = {
  title: 'Go Arif Privacy Policy - Secure AI Data Analysis & Visualization',
  description:
    'Go Arif is committed to protecting your data privacy. Read our privacy policy for details on how we collect, store, and use your data securely and with transparency.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="container flex-1 py-10">
      <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>
      <Separator className="my-4" />
      <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
        <p className="text-lg">
          Last updated:{' '}
          <strong>{formatLocalDate(new Date('2024-12-23 00:00'), 'dd MMMM yyyy')}</strong>
        </p>
        <p>
          At Arif, we are committed to protecting your privacy. This Privacy Policy explains how we
          collect, use, share, and protect your information when you use our data analytics platform
          Goarif.
        </p>

        <h2 className="mt-8 text-xl font-bold">1. Information We Collect</h2>
        <p className="font-semibold">Information You Provide:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Account Information: When you create an Arif account, we may collect information such as
            your name, email address, and company name.
          </li>
          <li>
            Data You Upload: You may upload data to the Platform, such as customer data, market
            research data, or other relevant datasets. This data may include personal information.
          </li>
          <li>
            Communication: When you contact us, we may collect your name, email address, phone
            number, and the content of your communication.
          </li>
        </ul>

        <p className="font-semibold">Information We Automatically Collect:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Usage Data: We may collect information about how you use the Platform, such as the
            features you access, the pages you visit, and the actions you take.
          </li>
          <li>
            Device Information: We may collect information about the device you use to access the
            Platform, such as your IP address, browser type, and operating system.
          </li>
          <li>
            Cookies and Similar Technologies: We may use cookies and similar technologies to collect
            information about your usage of the Platform. You can control the use of cookies through
            your browser settings.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-bold">2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Provide and maintain the Platform: Deliver the Arif platform and its features to you.
          </li>
          <li>
            Improve our services: Analyze usage trends and improve the functionality and performance
            of the Platform.
          </li>
          <li>
            Respond to your inquiries: Address your questions, concerns, and support requests.
          </li>
          <li>Conduct research and development: Develop and improve our products and services.</li>
          <li>
            Comply with legal and regulatory obligations: Meet our legal and regulatory
            requirements.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-bold">3. Data Sharing and Disclosure </h2>
        <p className="font-semibold">We may share your information with:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Confidentiality: your data will not be used for AI training or shared with third parties
            without your consent.
          </li>
          <li>
            Service Providers: We may share your information with trusted third-party service
            providers who assist us in providing the Platform, such as cloud providers, data storage
            providers, and customer support providers.
          </li>
          <li>
            Business Partners: We may share your information with business partners for joint
            marketing or other business purposes.
          </li>
          <li>
            Legal and Regulatory Authorities: We may disclose your information to comply with legal
            and regulatory obligations, such as responding to subpoenas or court orders.
          </li>
          <li>
            Business Transfers: If we are involved in a merger, acquisition, or sale of assets, your
            information may be transferred to the acquiring entity.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-bold">4. Data Security</h2>
        <p>
          We take reasonable measures to protect your information from unauthorized access, use, or
          disclosure. However, no method of transmission over the internet or method of electronic
          storage is completely secure.
        </p>

        <h2 className="mt-8 text-xl font-bold">5. Data Retention</h2>
        <p>
          We retain your information for as long as necessary to fulfill the purposes outlined in
          this Privacy Policy or as required by law.
        </p>

        <h2 className="mt-8 text-xl font-bold">6. Your Rights</h2>
        <p>You may have certain rights regarding your information, such as the right to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Access your personal information. </li>
          <li>Request correction of inaccurate information. </li>
          <li>Request deletion of your personal information. </li>
          <li>Object to the processing of your personal information. </li>
          <li>Restrict the processing of your personal information.</li>
          <li>Data portability: Receive your personal information in a portable format. </li>
        </ul>
        <p>
          To exercise these rights, please contact us at{' '}
          <Link
            href="mailto:care@goarif.co"
            className="text-indigo-600 hover:text-indigo-500 hover:underline"
          >
            care@goarif.co
          </Link>
        </p>

        <h2 className="mt-8 text-xl font-bold">7. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any material
          changes by posting the updated policy on our website and, if necessary, by other means
          such as email.
        </p>

        <h2 className="mt-8 text-xl font-bold">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <Link
            href="mailto:care@goarif.co"
            className="text-indigo-600 hover:text-indigo-500 hover:underline"
          >
            care@goarif.co
          </Link>
        </p>
      </div>
    </section>
  )
}
