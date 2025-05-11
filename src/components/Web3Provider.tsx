'use client'

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider: any) {
  return new Web3Provider(provider)
}

export default function Web3ProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {children}
    </Web3ReactProvider>
  )
} 