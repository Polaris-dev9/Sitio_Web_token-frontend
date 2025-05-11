"use client";

export const dynamic = "force-dynamic";

import Link from 'next/link'
import { FaBuilding, FaChartLine, FaShieldAlt, FaWallet } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary text-accent">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-light opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span>
                <p>Hello, I'm Svitlana.</p>
                <p>Do you use telegram?</p>
                <p>@morningstar1213</p>
                <p>This is my telegram username.</p>
                <p>How about communication in telegram for more flexible communication?</p>
              </span>
              {/* <span className="block text-primary">Real Estate Investment</span> */}
              {/* <span className="block">Made Simple</span> */}
            </h1>
            <p className="mt-6 text-xl text-accent-dark max-w-3xl mx-auto">
              Tokenize your real estate investments and access premium properties with just a few clicks.
              Join the future of real estate investment with InmoToken.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/properties"
                className="rounded-md bg-primary px-8 py-3 text-base font-medium text-secondary hover:bg-primary-dark"
              >
                View Properties
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-md bg-transparent border-2 border-primary px-8 py-3 text-base font-medium text-primary hover:bg-primary hover:text-secondary"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-secondary sm:text-4xl">
              Why Choose InmoToken?
            </h2>
            <p className="mt-4 text-lg text-secondary-light">
              Experience the future of real estate investment with our innovative platform.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative p-6 bg-white rounded-lg shadow-lg">
              <div className="text-primary">
                <FaBuilding className="h-12 w-12" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-secondary">Premium Properties</h3>
              <p className="mt-2 text-secondary-light">
                Access carefully selected real estate opportunities with high growth potential.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg shadow-lg">
              <div className="text-primary">
                <FaChartLine className="h-12 w-12" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-secondary">Smart Investment</h3>
              <p className="mt-2 text-secondary-light">
                Invest in fractional ownership of properties with transparent returns.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg shadow-lg">
              <div className="text-primary">
                <FaShieldAlt className="h-12 w-12" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-secondary">Secure Platform</h3>
              <p className="mt-2 text-secondary-light">
                Built on blockchain technology with advanced security measures.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg shadow-lg">
              <div className="text-primary">
                <FaWallet className="h-12 w-12" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-secondary">Easy Management</h3>
              <p className="mt-2 text-secondary-light">
                Manage your investments and track returns through our intuitive dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-display font-bold tracking-tight text-accent sm:text-4xl">
            <span className="block">Ready to start investing?</span>
            <span className="block text-primary">Join InmoToken today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-primary hover:bg-primary-dark"
              >
                Get Started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary-light"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
