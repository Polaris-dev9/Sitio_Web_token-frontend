"use client"
export const dynamic = "force-dynamic"

import { FaWallet, FaChartLine, FaBuilding, FaHistory } from 'react-icons/fa'

// Mock data for the dashboard
const portfolioData = {
  totalValue: '$50,000',
  totalTokens: 25,
  monthlyReturn: '$250',
  annualReturn: '6%',
  properties: [
    {
      id: 1,
      name: 'Luxury Apartment Complex',
      tokens: 10,
      value: '$20,000',
      return: '8%',
    },
    {
      id: 2,
      name: 'Commercial Office Building',
      tokens: 15,
      value: '$30,000',
      return: '6%',
    },
  ],
  recentTransactions: [
    {
      id: 1,
      type: 'Purchase',
      property: 'Luxury Apartment Complex',
      tokens: 5,
      amount: '$10,000',
      date: '2024-03-15',
    },
    {
      id: 2,
      type: 'Purchase',
      property: 'Commercial Office Building',
      tokens: 10,
      amount: '$20,000',
      date: '2024-03-10',
    },
    {
      id: 3,
      type: 'Dividend',
      property: 'Luxury Apartment Complex',
      amount: '$100',
      date: '2024-03-01',
    },
  ],
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-accent">
      {/* Hero Section */}
      <section className="relative bg-secondary text-accent">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-light opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-primary">Investor Dashboard</span>
              <span className="block">Track Your Investments</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FaWallet className="h-8 w-8 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-secondary">Total Portfolio Value</h3>
                  <p className="text-2xl font-bold text-primary">{portfolioData.totalValue}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FaBuilding className="h-8 w-8 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-secondary">Total Tokens</h3>
                  <p className="text-2xl font-bold text-primary">{portfolioData.totalTokens}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FaChartLine className="h-8 w-8 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-secondary">Monthly Return</h3>
                  <p className="text-2xl font-bold text-primary">{portfolioData.monthlyReturn}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FaChartLine className="h-8 w-8 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-secondary">Annual Return</h3>
                  <p className="text-2xl font-bold text-primary">{portfolioData.annualReturn}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties and Transactions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Properties */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-medium text-secondary mb-6">Your Properties</h2>
              <div className="space-y-6">
                {portfolioData.properties.map((property) => (
                  <div key={property.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-secondary">{property.name}</h3>
                        <p className="text-secondary-light">Tokens: {property.tokens}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-medium text-secondary">{property.value}</p>
                        <p className="text-primary">{property.return} Return</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-medium text-secondary mb-6">Recent Transactions</h2>
              <div className="space-y-6">
                {portfolioData.recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-secondary">{transaction.type}</h3>
                        <p className="text-secondary-light">{transaction.property}</p>
                        {transaction.tokens && (
                          <p className="text-secondary-light">Tokens: {transaction.tokens}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-medium text-secondary">{transaction.amount}</p>
                        <p className="text-secondary-light">{transaction.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-primary hover:bg-primary-dark">
              Buy More Tokens
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary-light">
              View Reports
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 