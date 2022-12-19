import { useAccount, useConnectors } from "@starknet-react/core";
import { useEffect, useState } from "react";

import { Button } from "react-bootstrap";

import "../App.css";
import ConnectionStatus from "./ConnectionStatus";
import LoadingButton from "./LoadingButton";

function handleArgent(connect, connectors) {
  return new Promise((resolve, reject) => {
    console.log("in handleargent");
    connect(connectors[1])
    resolve("connected");
    reject("User Cancelled");
  });
}

function handleBraavos(connect, connectors) {
  return new Promise(() => connect(connectors[0]));
}

export default function ConnectWallet() {
  const { connect, connectors } = useConnectors();
  const { account, address, status } = useAccount();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!connected) {
      // console.log("disconnected1");
      console.log(connected + "3");
    }
  }, [connected]);

  useEffect(() => {
    if (status === "disconnected") {
      console.log(status + "4");
      setConnected(false);
    }
  }, [status]);
  console.log(status + "2");
  // console.log(account)
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
          console.log("clicked argent");
          handleArgent(connect, connectors).then(
            (value) => {
              if (status === "connected") {
                setConnected(true);
              }
              console.log(connected + " zkx");
              console.log(value+"5");
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
        onClick={() =>
          handleBraavos(connect, connectors).then(() => setConnected(true))
        }
      >
        Braavos
      </Button>
      <LoadingButton />
      <Button className="login-btn address">abcd</Button>
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
