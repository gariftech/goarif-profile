// pages/coming-soon.tsx
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'

export default function ComingSoon() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-blue-600 text-6xl font-bold mb-4">Coming Soon</h1>
      <p className="text-gray-600 text-xl mb-8">We are building something awesome</p>
      <Link 
        href="/"
        className="flex items-center text-gray-600 hover:text-gray-800"
      >
        <HiArrowLeft className="mr-2" />
        Back to Home
      </Link>
    </div>
  )
}