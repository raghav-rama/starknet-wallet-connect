import { StarknetConfig, InjectedConnector } from '@starknet-react/core'
import ConnectWallet from './ConnectWallet'

export default function InjectWallet({ Component, pageProps }) {
    const connectors = [
      new InjectedConnector({ options: { id: 'braavos' }}),
      new InjectedConnector({ options: { id: 'argentX' }}),
    ]
    return (
      <StarknetConfig connectors={connectors}>
        < ConnectWallet />
      </StarknetConfig>
    )
  }
  