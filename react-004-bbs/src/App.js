import logo from "./logo.svg";
import "./css/App.css";
import BBsMain from "./comps/BBsMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BBsMain />
    </div>
  );
}

export default App;
