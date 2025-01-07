import { PropsWithChildren } from 'react'
import Footer from './footer'
import Navbar from './navbar'

type IProps = PropsWithChildren

export default function Layout({ children }: IProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
