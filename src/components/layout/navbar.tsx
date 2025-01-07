import React from 'react'
import { cn } from '~/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Go Arif</span>
        </div>

        <NavigationMenu className="mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-indigo-400 to-indigo-600 p-6 no-underline outline-none focus:shadow-md"
                        href="#"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          AI-Powered Analytics
                        </div>
                        <p className="text-sm leading-tight text-indigo-100">
                          Transform your raw data into actionable insights with our advanced AI
                          algorithms.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#" title="Data Processing">
                    Real-time processing and analysis of large datasets
                  </ListItem>
                  <ListItem href="#" title="Predictive Analytics">
                    Forecast future trends with machine learning
                  </ListItem>
                  <ListItem href="#" title="Business Intelligence">
                    Make data-driven decisions with confidence
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <ListItem href="#" title="Documentation">
                    Comprehensive guides and API references
                  </ListItem>
                  <ListItem href="#" title="Case Studies">
                    Success stories from our clients
                  </ListItem>
                  <ListItem href="#" title="Blog">
                    Latest insights and updates
                  </ListItem>
                  <ListItem href="#" title="Support">
                    24/7 expert assistance
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem href="#" title="About Us">
                    Our mission and team
                  </ListItem>
                  <ListItem href="#" title="Careers">
                    Join our growing team
                  </ListItem>
                  <ListItem href="#" title="Contact">
                    Get in touch with us
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="https://app.goarif.co/auth/login"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg"
          >
            Sign in
          </Link>

          <Link
            href="https://app.goarif.co/auth/register"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>
      </div>
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
