import React from 'react'
import { useAccount } from '@starknet-react/core'

function ConnectionStatus() {
    const { address, status } = useAccount()
    if (status === 'disconnected') return <>Disconnected</>
    return <>Account: {address}</>
}

export default ConnectionStatus
