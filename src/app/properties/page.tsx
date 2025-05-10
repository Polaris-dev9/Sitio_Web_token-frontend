"use client"
import { FaSearch, FaFilter, FaMapMarkerAlt, FaBuilding, FaChartLine } from 'react-icons/fa'

// Mock data for properties
const properties = [
  {
    id: 1,
    title: 'Luxury Apartment Complex',
    location: 'Miami, FL',
    type: 'Residential',
    totalValue: '$5,000,000',
    tokenPrice: '$1,000',
    availableTokens: 1000,
    expectedReturn: '8%',
    image: '/images/property1.jpg',
  },
  {
    id: 2,
    title: 'Commercial Office Building',
    location: 'New York, NY',
    type: 'Commercial',
    totalValue: '$15,000,000',
    tokenPrice: '$2,500',
    availableTokens: 2000,
    expectedReturn: '6%',
    image: '/images/property2.jpg',
  },
  {
    id: 3,
    title: 'Shopping Mall',
    location: 'Los Angeles, CA',
    type: 'Retail',
    totalValue: '$25,000,000',
    tokenPrice: '$5,000',
    availableTokens: 1500,
    expectedReturn: '7%',
    image: '/images/property3.jpg',
  },
]

export default function Properties() {
  return (
    <div className="min-h-screen bg-accent">
      {/* Hero Section */}
      <section className="relative bg-secondary text-accent">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-light opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-primary">Available Properties</span>
              <span className="block">Investment Opportunities</span>
            </h1>
            <p className="mt-6 text-xl text-accent-dark max-w-3xl mx-auto">
              Browse our selection of premium real estate properties available for tokenized investment.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-secondary-light" />
                </div>
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="h-5 w-5 text-secondary-light" />
                </div>
                <select className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm">
                  <option>All Locations</option>
                  <option>Miami, FL</option>
                  <option>New York, NY</option>
                  <option>Los Angeles, CA</option>
                </select>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBuilding className="h-5 w-5 text-secondary-light" />
                </div>
                <select className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm">
                  <option>All Types</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Retail</option>
                </select>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaChartLine className="h-5 w-5 text-secondary-light" />
                </div>
                <select className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm">
                  <option>All Returns</option>
                  <option>6%+</option>
                  <option>7%+</option>
                  <option>8%+</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-secondary">{property.title}</h3>
                  <p className="mt-2 text-secondary-light">{property.location}</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-secondary-light">Total Value</p>
                      <p className="text-lg font-medium text-secondary">{property.totalValue}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-light">Token Price</p>
                      <p className="text-lg font-medium text-secondary">{property.tokenPrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-light">Available Tokens</p>
                      <p className="text-lg font-medium text-secondary">{property.availableTokens}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-light">Expected Return</p>
                      <p className="text-lg font-medium text-primary">{property.expectedReturn}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-primary hover:bg-primary-dark text-secondary px-4 py-2 rounded-md text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 