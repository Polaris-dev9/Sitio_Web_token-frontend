import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-secondary text-accent">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-display text-primary">InmoToken</h3>
            <p className="text-sm text-accent-dark">
              Professional platform for real estate tokenization and investment management.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-accent-dark hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-accent-dark hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-accent-dark hover:text-primary">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-accent-dark hover:text-primary">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-accent-dark hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-accent-dark hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/kyc" className="text-accent-dark hover:text-primary">
                  KYC/AML Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-accent-dark hover:text-primary">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-accent-dark hover:text-primary">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-accent-dark hover:text-primary">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-accent-dark hover:text-primary">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm text-accent-dark">
            © {new Date().getFullYear()} InmoToken SAC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 