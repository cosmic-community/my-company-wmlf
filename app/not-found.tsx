import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <div className="text-6xl mb-4">🏢</div>
      <h1 className="text-4xl font-extrabold text-gray-900">Page Not Found</h1>
      <p className="mt-4 text-gray-600">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 px-6 py-3 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}