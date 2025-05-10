import { FaSearch, FaFileAlt, FaWallet, FaChartLine } from 'react-icons/fa'

const steps = [
  {
    title: 'Property Selection',
    description: 'We carefully select premium real estate properties with high growth potential and stable returns.',
    icon: FaSearch,
  },
  {
    title: 'Tokenization',
    description: 'The selected property is tokenized into digital assets, making it accessible for fractional ownership.',
    icon: FaFileAlt,
  },
  {
    title: 'Investment',
    description: 'Investors can purchase tokens representing a share of the property using cryptocurrency or fiat currency.',
    icon: FaWallet,
  },
  {
    title: 'Returns',
    description: 'Earn returns through rental income and property appreciation, distributed proportionally to token holders.',
    icon: FaChartLine,
  },
]

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-accent">
      {/* Hero Section */}
      <section className="relative bg-secondary text-accent">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-light opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-primary">How It Works</span>
              <span className="block">Real Estate Tokenization</span>
            </h1>
            <p className="mt-6 text-xl text-accent-dark max-w-3xl mx-auto">
              Learn how we're revolutionizing real estate investment through blockchain technology
              and fractional ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-secondary">
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-medium text-secondary">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="mt-2 text-secondary-light">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:pl-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-display font-bold text-secondary mb-6">
                  Benefits of Tokenization
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-secondary">
                        <span className="text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <p className="ml-3 text-secondary-light">
                      Lower investment barriers with fractional ownership
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-secondary">
                        <span className="text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <p className="ml-3 text-secondary-light">
                      Increased liquidity through token trading
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-secondary">
                        <span className="text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <p className="ml-3 text-secondary-light">
                      Transparent and secure transactions on the blockchain
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-secondary">
                        <span className="text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <p className="ml-3 text-secondary-light">
                      Automated distribution of rental income and returns
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-secondary">
                        <span className="text-sm font-medium">✓</span>
                      </div>
                    </div>
                    <p className="ml-3 text-secondary-light">
                      Global access to premium real estate investments
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-display font-bold tracking-tight text-accent sm:text-4xl">
            <span className="block">Ready to start your investment journey?</span>
            <span className="block text-primary">Join InmoToken today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-primary hover:bg-primary-dark"
              >
                Get Started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary-light"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 