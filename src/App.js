import InjectWallet from './components/InjectWallet';
import './App.css';
import ConnectionStatus from './components/ConnectionStatus';

function App() {
  return (
    <div className="App">
      <InjectWallet/>
      <ConnectionStatus/>
    </div>
  );
}

export default App;
