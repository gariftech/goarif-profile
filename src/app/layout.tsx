import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import Provider from '~/lib/provider'

const NunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

const NeviaSans = localFont({
  variable: '--font-NeviaSans',
  src: [
    {
      path: '../../public/assets/fonts/nevia/nevia-light.woff',
      weight: '300',
    },
    {
      path: '../../public/assets/fonts/nevia/nevia-regular.woff',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/nevia/nevia-black.woff',
      weight: '500',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Go Arif | Your Personal Data Analyst',
  description: 'Empowering everyone to uncover Insights in their data',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(NunitoSans.className, NeviaSans.variable, `antialiased`)}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
