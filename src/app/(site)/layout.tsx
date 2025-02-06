import { PropsWithChildren } from 'react'
import Layout from '~/components/layout'

type IProps = PropsWithChildren

export default function SiteLayout({ children }: IProps) {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">{children}</div>
    </Layout>
  )
}
