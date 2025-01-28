import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const services = [
  {
    title: 'Data Cleaning',
    link: '#',
  },
  {
    title: 'Data Visualization',
    link: '#',
  },
  {
    title: 'Machine Learning',
    link: '#',
  },
  {
    title: 'Business Intelligence ',
    link: '#',
  },
  {
    title: 'Predictive Analysis',
    link: '#',
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
    title: 'Whitepapers',
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
    title: 'SQL',
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
    icon: <IconBrandFacebook className="h-6 w-6" />,
    link: '#',
  },
  {
    icon: <IconBrandTwitter className="h-6 w-6" />,
    link: '#',
  },
  {
    icon: <IconBrandLinkedin className="h-6 w-6" />,
    link: 'https://www.linkedin.com/company/arif-analytics/',
  },
  {
    icon: <IconBrandInstagram className="h-6 w-6" />,
    link: '#',
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
  <Link href={href} className="flex items-center gap-2 hover:text-white transition-colors">
    {icon}
    <span>{children}</span>
  </Link>
)

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* About Us */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-white">
                <Link
                  href="/"
                  className="text-[2.5rem] hover:text-indigo-500 font-nevia tracking-wide"
                >
                  ARIF
                </Link>
              </h2>
              <p className="mb-4">
                Turn insights into business decisions, better, faster, cost efficient.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
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

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href={service.link} className="hover:text-white transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link href={resource.link} className="hover:text-white transition-colors">
                      {resource.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Tools We Use</h3>
              <ul className="space-y-2">
                {tools.map((tool, index) => (
                  <li key={index}>
                    <Link href={tool.link} className="hover:text-white transition-colors">
                      {tool.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact and Social */}
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                  <ContactLink href="mailto:care@goarif.co" icon={<Mail className="h-4 w-4" />}>
                    care@goarif.co
                  </ContactLink>
                  <ContactLink href="tel:+628117576088" icon={<Phone className="h-4 w-4" />}>
                    +62 811 757 6088
                  </ContactLink>
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

            <div className="flex space-x-4 mt-4 sm:mt-0">
              {socialMedia.map((item, index) => (
                <Link href={item.link} className="hover:text-white transition-colors" key={index}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()}{' '}
            <Link href="/" className="hover:underline hover:text-indigo-500">
              ARIF
            </Link>{' '}
            Research Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
