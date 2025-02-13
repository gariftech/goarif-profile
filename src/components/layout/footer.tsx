import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react'
import { Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const company = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Careers',
    link: '#',
  },
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
  },
  {
    title: 'Term of Service',
    link: '/term-of-service',
  },
]

const resources = [
  {
    title: 'Blog',
    link: '#',
  },
  {
    title: 'Case Studies',
    link: '#',
  },
  {
    title: 'Knowledge Base',
    link: '#',
  },
  {
    title: 'Tutorial',
    link: '#',
  },
]

const tools = [
  {
    title: 'Python',
    link: '#',
  },
  {
    title: 'LLM',
    link: '#',
  },
  {
    title: 'RAG',
    link: '#',
  },
  {
    title: 'LangChain',
    link: '#',
  },
]

const socialMedia = [
  {
    icon: <IconBrandLinkedin className="h-6 w-6" />,
    link: 'https://www.linkedin.com/company/arif-analytics/',
  },
]

const ContactLink = ({
  href,
  icon,
  children,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
}) => (
  <Link href={href} className="flex items-center gap-2 transition-colors hover:text-white">
    {icon}
    <span>{children}</span>
  </Link>
)

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-12 text-gray-300">
      <div className="container mx-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* About Us */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="mb-4 text-2xl font-bold text-white">
                <Link
                  href="/"
                  className="font-nevia text-[2.5rem] tracking-wide hover:text-indigo-500"
                >
                  ARIF
                </Link>
              </h2>
              <p className="mb-4">
                Turn insights into business decisions, better, faster, cost efficient.
              </p>
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white"
                />
                <Button type="submit" variant="secondary">
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                {company.map((service, index) => (
                  <li key={index}>
                    <Link href={service.link} className="transition-colors hover:text-white">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Resources</h3>
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link href={resource.link} className="transition-colors hover:text-white">
                      {resource.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact and Social */}
          <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                  <ContactLink href="mailto:care@goarif.co" icon={<Mail className="h-4 w-4" />}>
                    care@goarif.co
                  </ContactLink>
                  {/* <ContactLink href="tel:+628117576088" icon={<Phone className="h-4 w-4" />}>
                    +62 811 757 6088
                  </ContactLink> */}
                </div>
                <ContactLink
                  href="https://maps.app.goo.gl/heQ4eFbBrmCz29rM6"
                  icon={<MapPin className="h-4 w-4" />}
                >
                  Jl. Jend. Sudirman, Indonesia Stock Exchange, Tower 1, Level 3 Unit 304, Jakarta,
                  DI Jakarta 12190, ID
                </ContactLink>
              </div>
            </div>

            <div className="mt-4 flex space-x-4 sm:mt-0">
              {socialMedia.map((item, index) => (
                <Link href={item.link} className="transition-colors hover:text-white" key={index}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()}{' '}
            <Link href="/" className="hover:text-indigo-500 hover:underline">
              ARIF
            </Link>{' '}
            Research Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
