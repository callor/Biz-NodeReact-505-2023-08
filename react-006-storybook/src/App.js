import logo from "./logo.svg";
import "./App.css";
import BucketMain from "./comps/BucketMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="main">
        <BucketMain />
      </section>
    </div>
  );
}

export default App;
