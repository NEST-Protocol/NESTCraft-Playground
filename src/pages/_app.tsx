import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createConfig } from 'wagmi'
import { createPublicClient, http } from 'viem'
import {bscTestnet} from "wagmi/chains";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: bscTestnet,
    transport: http()
  }),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}
