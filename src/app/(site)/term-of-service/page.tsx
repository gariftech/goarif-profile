import { Metadata } from 'next'
import Link from 'next/link'
import { Separator } from '~/components/ui/separator'
import { formatLocalDate } from '~/lib/date'

export const metadata: Metadata = {
  title: 'Go Arif Term of Service: AI-Powered Data Analytics Platform  | Easy-to-use Insights',
  description: `Discover Go Arif's AI-powered data analytics platform Terms of Service. Read how our platform empowers professionals, researchers, academics, and journalists to unlock insights from their data. Learn more about our terms and get started today.`,
}

export default function TermOfServicePage() {
  return (
    <section className="container py-10 flex-1">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <Separator className="my-4" />
      <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
        <p className="text-lg">
          Last updated:{' '}
          <strong>{formatLocalDate(new Date('2024-12-23 00:00'), 'dd MMMM yyyy')}</strong>
        </p>
        <p>
          Welcome to Arif! By using our platform, you agree to the following Terms and Conditions.
          Please read them carefully.
        </p>
        <h2 className="text-xl font-bold mt-8">1. Definitions</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>{`"Platform" refers to the Arif application, website, and related services.`}</li>
          <li>{`"User" refers to any individual or entity using the Platform.`}</li>
          <li>
            {`"Content" refers to any data, insights, or materials generated or uploaded through the
            Platform.`}
          </li>
        </ul>
        <h2 className="text-xl font-bold mt-8">2. Acceptance of Terms</h2>
        <p>
          By accessing or using the Platform, you confirm that you have read, understood, and agreed
          to these Terms and Conditions. If you do not agree, you must not use the Platform.
        </p>
        <h2 className="text-xl font-bold mt-8">3. User Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Account Security: Users are responsible for maintaining the confidentiality of their
            account credentials and are liable for all activities under their account.
          </li>
          <li>
            Data Integrity: Users must ensure that all data uploaded to the Platform is lawful and
            does not violate the rights of any third party.
          </li>
          <li>
            Compliance: Users must comply with all applicable laws and regulations while using the
            Platform.
          </li>
        </ul>
        <h2 className="text-xl font-bold mt-8">4. Platform Usage</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            License: Arif grants Users a non-exclusive, non-transferable license to use the
            Platform.
          </li>
          <li>Prohibited Activities: Users may not:</li>
          <ul className="list-disc pl-6 space-y-1">
            <li>Reverse-engineer or attempt to access the Platform’s source code.</li>
            <li>Use the Platform for unlawful activities.</li>
            <li>Share login credentials or allow unauthorized access.</li>
          </ul>
          <li>
            Service Modifications: Arif reserves the right to modify or discontinue any part of the
            Platform without notice.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-8">5. Fees and Payments</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Subscription Plans: Users must pay subscription fees based on the chosen plan.</li>
          <li>Billing: Payments are due as specified during subscription signup.</li>
          <li>
            Refunds: Refunds are only available under specific conditions outlined in our Refund
            Policy.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-8">6. Intellectual Property</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Ownership: Arif retains all rights, title, and interest in the Platform and its Content.
          </li>
          <li>
            User Content: Users retain ownership of data uploaded to the Platform. By uploading
            data, Users grant Arif a license to process and analyze it for Platform functionality.
            Arif will not use uploaded data for training its AI models or for any purpose outside of
            providing the agreed-upon services.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-8">7. Data Privacy</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Security: Arif implements industry-standard security measures to protect User data.
          </li>
          <li>
            Privacy Policy: By using the Platform, Users consent to the collection and use of their
            data as described in the Privacy Policy.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-8">8. Limitation of Liability</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            {`No Warranty: The Platform is provided "as is," without warranties of any kind.`}
          </li>
          <li>
            Liability Cap: Arif’s total liability to any User for any claim is limited to the fees
            paid by the User in the last six months.
          </li>
          <li>
            Third-Party Services: Arif is not responsible for third-party services integrated with
            the Platform.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-8">9. Termination</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>By User: Users may terminate their account at any time.</li>
          <li>
            By Arif: Arif may suspend or terminate access for violations of these Terms or other
            reasonable causes.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-8">10. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of the State of the
          Republic of Indonesia, and any legal action arising from or related to these Terms shall
          be filed only in the courts located in the Republic of Indonesia.
        </p>

        <h2 className="text-xl font-bold mt-8">11. Changes to Terms</h2>
        <p>
          Arif reserves the right to update these Terms and Conditions. Users will be notified of
          significant changes and their continued use of the Platform constitutes acceptance of the
          updated Terms.
        </p>

        <h2 className="text-xl font-bold mt-8">12. Contact Information</h2>
        <p>
          For questions about these Terms and Conditions, contact us at:{' '}
          <Link
            href="mailto:care@goarif.co"
            className="text-indigo-600 hover:underline hover:text-indigo-500"
          >
            care@goarif.co
          </Link>
        </p>

        <p>Thank you for using Arif. We’re here to empower your data-driven journey!</p>
      </div>
    </section>
  )
}
