import React, { useState } from 'react'
import { useAccount } from '@starknet-react/core'

function ConnectionStatus() {
    const [connected, setConnected] = useState()
    const { account, address, status } = useAccount()

    
  
    if (status === 'disconnected') return <p>Disconnected</p>
    return <p>Account: {address}</p>
}

export default ConnectionStatus
