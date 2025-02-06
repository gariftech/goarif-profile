'use client'

import { IconWorldSearch } from '@tabler/icons-react'
import Image from 'next/image'
import React, { forwardRef, useRef } from 'react'
import { AnimatedBeam } from '~/components/ui/animated-beam'
import { cn } from '~/lib/utils'

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
          className
        )}
      >
        {children}
      </div>
    )
  }
)

Circle.displayName = 'Circle'

export function AnimateFlow({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        'relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg p-10',
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-2xl flex-row items-stretch justify-between gap-6">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="size-18">
            <Image quality={100} src="/diagram/user.png" alt="User" width={36} height={36} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-18">
            <IconWorldSearch className="size-9" stroke={1.5} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref} className="size-18">
            <Image quality={100} src="/diagram/input1.png" alt="User" width={36} height={36} />
          </Circle>
          <Circle ref={div2Ref} className="size-18">
            <Image quality={100} src="/diagram/input2.png" alt="User" width={36} height={36} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div3Ref} className="size-18">
            <Image quality={100} src="/diagram/report.png" alt="User" width={36} height={36} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div4Ref} className="size-18">
            <Image quality={100} src="/diagram/user2.png" alt="User" width={36} height={36} />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} />

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div3Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div3Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} duration={3} />
    </div>
  )
}
