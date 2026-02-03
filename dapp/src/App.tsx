import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import { useMainContract } from "./hooks/useMainContract";
import "./App.css";

function App() {
  const { connected } = useTonConnect();
  const { data, sendPing } = useMainContract();

  return (
    <div className="app">
      <header>
        <h1>TON dApp</h1>
        <TonConnectButton />
      </header>
      <main>
        {connected ? (
          <div>
            <p>Contract Data: {data?.toString()}</p>
            <button onClick={sendPing}>Send Ping</button>
          </div>
        ) : (
          <p>Connect your wallet to continue</p>
        )}
      </main>
    </div>
  );
}

export default App;