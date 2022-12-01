import { useConnectors } from "@starknet-react/core";

import { Button } from "react-bootstrap";

import '../App.css'

export default function ConnectWallet() {
  const { connect, connectors } = useConnectors();

  return (
    <div className="d-grid gap-2 login-btn-container">
          <Button
            className="login-btn login-btn-grey"
            variant="primary"
            size="lg"
            disabled
          >
            Discord
          </Button>
          <Button
            className="login-btn login-btn-grey"
            variant="primary"
            size="lg"
            disabled
          >
            MetaMask
          </Button>
          <Button
            className="login-btn"
            variant="primary"
            size="lg"
            onClick={() => connect(connectors[1])}
          >
            ArgentX
          </Button>
          <Button
            className="login-btn"
            variant="primary"
            size="lg"
            onClick={() => connect(connectors[0])}
          >
            Braavos
          </Button>
    </div>
  );
}
