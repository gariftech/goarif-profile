'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { PropsWithChildren } from 'react'

type IProps = PropsWithChildren

export default function WrapperNProgress({ children }: IProps) {
  return (
    <>
      {children}
      <ProgressBar height="4px" color="#6366f1" options={{ showSpinner: true }} shallowRouting />
    </>
  )
}
