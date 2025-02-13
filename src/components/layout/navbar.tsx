'use client'

import clsx from 'clsx'
import { motion } from 'motion/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { cn } from '~/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'

const menus = [
  {
    group: 'Solutions',
    items: [
      {
        title: 'AI-Powered Analytics',
        description:
          'Transform your raw data into actionable insights with our advanced AI-powered algorithms.',
        link: '#',
        features: true,
      },
      {
        title: 'Data Processing',
        description: 'Real-time processing and analysis of large datasets',
        link: '#',
        features: false,
      },
      {
        title: 'Predictive Analytics',
        description: 'Forecast future trends with machine learning',
        link: '#',
        features: false,
      },
      {
        title: 'Business Intelligence',
        description:
          'Gain insights from complex data with our expert business intelligence solutions.',
        link: '#',
        features: false,
      },
    ],
  },
  {
    group: 'Resources',
    items: [
      {
        title: 'Documentation',
        description: 'Comprehensive guides and API references',
        link: '#',
        features: false,
      },
      {
        title: 'Case Studies',
        description: 'Success stories from our clients',
        link: '#',
        features: false,
      },
      { title: 'Blog', description: 'Latest insights and trends', link: '#', features: false },
      { title: 'Support', description: 'Get in touch with our team', link: '#', features: false },
    ],
  },
  {
    group: 'Company',
    items: [
      {
        title: 'About',
        description: 'Learn more about our company',
        link: '/about',
        features: false,
      },
      {
        title: 'Term of Service',
        description: 'Read our terms of service',
        link: '/term-of-service',
        features: false,
      },
      {
        title: 'Contact Us',
        description: 'Get in touch with our team',
        link: '/contact',
        features: false,
      },
      {
        title: 'Privacy Policy',
        description: 'Our privacy policy',
        link: '/privacy-policy',
        features: false,
      },
    ],
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const login_url = 'coming-soon'
  const register_url = 'coming-soon'

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="font-nevia text-[2.5rem] font-bold tracking-wide text-indigo-600 hover:text-indigo-500"
            >
              ARIF
            </Link>
          </div>

          <div className="hidden items-center md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {menus.map((item) => {
                  return (
                    <NavigationMenuItem key={item.group}>
                      <NavigationMenuTrigger>{item.group}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.items.map((nav) => {
                            if (nav.features) {
                              return (
                                <li className="row-span-3" key={nav.title}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-indigo-400 to-indigo-600 p-6 no-underline outline-none focus:shadow-md"
                                      href={nav.link}
                                    >
                                      <div className="mb-2 mt-4 text-lg font-medium text-white">
                                        {nav.title}
                                      </div>
                                      <p className="text-sm leading-tight text-indigo-100">
                                        {nav.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              )
                            }

                            return (
                              <ListItem href={nav.link} title={nav.title} key={nav.title}>
                                {nav.description}
                              </ListItem>
                            )
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href={login_url}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              href={register_url}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              className="mobile-menu-button rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              <motion.svg
                key={open ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: open ? 180 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={clsx('mobile-menu flex flex-col gap-2 md:hidden')}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <ul className="space-y-1 sm:px-3">
          {menus.map((item) => {
            return (
              <li key={item.group}>
                <Link
                  href="#"
                  className="block px-6 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.group}
                </Link>

                <ul className="relative ml-7 space-y-2">
                  {item.items.map((nav) => {
                    return (
                      <li
                        className="block border-l border-gray-300 px-6 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        key={nav.title}
                      >
                        <Link href={nav.link}>{nav.title}</Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>

        <Link
          href={login_url}
          className="block px-6 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Sign in
        </Link>

        <Link
          href={register_url}
          className="block px-6 py-2 text-base font-medium text-indigo-600 hover:bg-gray-100 hover:text-indigo-700"
        >
          Get Started
        </Link>
      </motion.div>
    </nav>
  )
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'a'> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
