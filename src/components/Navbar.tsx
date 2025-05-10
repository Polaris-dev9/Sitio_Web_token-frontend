'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // Ethereum networks
})

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { active, account, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (error) {
      console.log(error)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="bg-secondary text-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-display text-primary">InmoToken</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/how-it-works" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  How It Works
                </Link>
                <Link href="/properties" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Properties
                </Link>
                <Link href="/dashboard" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {active ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm">
                    {account?.slice(0, 6)}...{account?.slice(-4)}
                  </span>
                  <button
                    onClick={disconnect}
                    className="bg-primary hover:bg-primary-dark text-secondary px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button
                  onClick={connect}
                  className="bg-primary hover:bg-primary-dark text-secondary px-4 py-2 rounded-md text-sm font-medium"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-accent hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/how-it-works" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            How It Works
          </Link>
          <Link href="/properties" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            Properties
          </Link>
          <Link href="/dashboard" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            Dashboard
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          {active ? (
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <span className="text-sm">
                  {account?.slice(0, 6)}...{account?.slice(-4)}
                </span>
              </div>
              <button
                onClick={disconnect}
                className="ml-3 bg-primary hover:bg-primary-dark text-secondary px-4 py-2 rounded-md text-sm font-medium"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <div className="px-5">
              <button
                onClick={connect}
                className="w-full bg-primary hover:bg-primary-dark text-secondary px-4 py-2 rounded-md text-sm font-medium"
              >
                Connect Wallet
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
} 