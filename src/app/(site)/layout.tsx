import React, { PropsWithChildren } from 'react'
import Layout from '~/components/layout'

type IProps = PropsWithChildren

export default function SiteLayout({ children }: IProps) {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</div>
    </Layout>
  )
}