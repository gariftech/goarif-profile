import { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import WrapperNProgress from './WrapperNProgress'

type IProps = PropsWithChildren

export default function Provider({ children }: IProps) {
  return (
    <WrapperNProgress>
      {children}
      <Toaster position="top-right" />
    </WrapperNProgress>
  )
}