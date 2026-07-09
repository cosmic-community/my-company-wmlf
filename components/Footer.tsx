import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-xl text-white mb-3">
              <span>🏢</span> My Company
            </div>
            <p className="text-sm text-gray-400">
              Delivering exceptional professional services with a passionate team
              and proven results.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/team" className="hover:text-white">Team</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Get in touch</h4>
            <p className="text-sm text-gray-400">
              Reach out to learn how we can help your business grow.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500">
          © {year} My Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}