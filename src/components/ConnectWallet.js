import { useAccount, useConnectors } from "@starknet-react/core";
import { useEffect, useState } from "react";

import { Button } from "react-bootstrap";

import "../App.css";
import ConnectionStatus from "./ConnectionStatus";

function handleArgent(connect, connectors) {
  return new Promise(async (resolve, reject) => {
    resolve(await connect(await connectors[1]));
    reject("User Cancelled");
  });
}

function handleBraavos(connect, connectors) {
  return new Promise(async (resolve, reject) => {
    resolve(await connect(await connectors[0]));
    reject("User Cancelled");
  });
}

export default function ConnectWallet() {
  const { connect, connectors } = useConnectors();
  const { status } = useAccount();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!connected) {
    }
  }, [connected]);

  useEffect(() => {
    if (status === "disconnected") {
    }
  }, [status]);
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
        className="login-btn argentX"
        variant="primary"
        size="lg"
        onClick={() => {
          handleArgent(connect, connectors).then(
            (value) => {
              if (status === "connected") {
                setConnected(true);
              }
            },
            (error) => {
              console.log(error);
            }
          );
        }}
      >
        ArgentX
      </Button>
      <Button
        className="login-btn braavos"
        variant="primary"
        size="lg"
        onClick={() => {
          handleBraavos(connect, connectors).then(
            (value) => {
              if (status === "connected") {
                setConnected(true);
              }
            },
            (error) => {
              console.log(error);
            }
          );
        }}
      >
        Braavos
      </Button>
      <Button className="login-btn address">
        <ConnectionStatus />
      </Button>
    </div>
  );
}

// (() => {
//   (value) => {
//     if (status === "connected") {
//       setConnected(true);
//     }
//     console.log(connected + " zkx")
//     console.log(value)
//   };
//   (error) => {
//     console.log(error);
//   }
// });
