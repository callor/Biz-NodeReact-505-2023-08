import logo from "./logo.svg";
import "./App.css";
import ArithMain from "./comps/ArithMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ArithMain />
    </div>
  );
}

export default App;
