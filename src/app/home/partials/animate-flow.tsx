'use client'

import { IconFileSymlink, IconWorldSearch } from '@tabler/icons-react'
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
  const div5Ref = useRef<HTMLDivElement>(null)
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
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-18">
            <IconWorldSearch className="size-8" stroke={1.5} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.excel />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.python />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.openai />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div4Ref} className="size-18">
            <IconFileSymlink className="size-8" stroke={1.5} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div5Ref}>
            <Icons.user />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} />

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div5Ref} duration={3} />
    </div>
  )
}

const Icons = {
  openai: () => (
    <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" fill="#ffffff" />
    </svg>
  ),
  python: () => (
    <svg width="100" height="100" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="python-a"
          gradientUnits="userSpaceOnUse"
          x1="12.959%"
          y1="12.039%"
          x2="79.639%"
          y2="78.201%"
        >
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient
          id="python-b"
          gradientUnits="userSpaceOnUse"
          x1="19.128%"
          y1="20.579%"
          x2="90.742%"
          y2="88.429%"
        >
          <stop offset="0%" stopColor="#FFE052" />
          <stop offset="100%" stopColor="#FFC331" />
        </linearGradient>
      </defs>
      <path
        fill="url(#python-a)"
        d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0111.13 11.13 11.12 11.12 0 01-11.13 11.13 11.12 11.12 0 01-11.13-11.13 11.12 11.12 0 0111.13-11.13z"
      />
      <path
        fill="url(#python-b)"
        d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 01-11.13-11.13 11.12 11.12 0 0111.13-11.131 11.12 11.12 0 0111.13 11.13 11.12 11.12 0 01-11.13 11.13z"
      />
    </svg>
  ),
  excel: () => (
    <svg width="100" height="100" viewBox="0 0 2289.75 2130" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="excel-gradient"
          gradientUnits="userSpaceOnUse"
          x1="203.5132"
          y1="1729.0183"
          x2="967.9868"
          y2="404.9817"
          gradientTransform="matrix(1 0 0 -1 0 2132)"
        >
          <stop offset="0" stopColor="#18884F" />
          <stop offset="0.5" stopColor="#117E43" />
          <stop offset="1" stopColor="#0B6631" />
        </linearGradient>
      </defs>
      <path
        fill="#185C37"
        d="M1437.75 1011.75L532.5 852v1180.393c0 53.907 43.7 97.607 97.607 97.607h1562.036c53.907 0 97.607-43.7 97.607-97.607V1597.5l-852.5-585.75z"
      />
      <path
        fill="#21A366"
        d="M1437.75 0H630.107C576.2 0 532.5 43.7 532.5 97.607V532.5l905.25 532.5L1917 1224.75l372.75-159.75V532.5L1437.75 0z"
      />
      <path fill="#107C41" d="M532.5 532.5h905.25V1065H532.5V532.5z" />
      <path
        fill="url(#excel-gradient)"
        d="M97.607 479.25h976.285c53.907 0 97.607 43.7 97.607 97.607v976.285c0 53.907-43.7 97.607-97.607 97.607H97.607C43.7 1650.75 0 1607.05 0 1553.143V576.857C0 522.95 43.7 479.25 97.607 479.25z"
      />
      <path
        fill="#FFFFFF"
        d="M302.3 1382.264l205.332-318.169L319.5 747.683h151.336l102.666 202.35c9.479 19.223 15.975 33.494 19.49 42.919h1.331c6.745-15.336 13.845-30.228 21.3-44.677L725.371 747.79h138.929l-192.925 314.548L869.2 1382.263H721.378L602.79 1160.158c-5.586-9.45-10.326-19.376-14.164-29.66h-1.757c-3.474 10.075-8.083 19.722-13.739 28.755l-122.102 223.011H302.3z"
      />
      <path
        fill="#33C481"
        d="M2192.143 0H1437.75v532.5h852V97.607C2289.75 43.7 2246.05 0 2192.143 0z"
      />
      <path fill="#107C41" d="M1437.75 1065h852v532.5h-852V1065z" />
    </svg>
  ),
}
