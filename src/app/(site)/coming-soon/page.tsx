import { IconArrowLeft } from '@tabler/icons-react'
import Link from 'next/link'

export default function ComingSoonPage() {
  return (
    <div className="flex h-[calc(100vh-120px)] flex-col items-center justify-center bg-white">
      <h1 className="mb-4 text-6xl font-bold text-blue-600">Coming Soon</h1>
      <p className="mb-8 text-xl text-gray-600">We are building something awesome</p>
      <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800">
        <IconArrowLeft className="mr-2" />
        <span>Back to Home</span>
      </Link>
    </div>
  )
}
