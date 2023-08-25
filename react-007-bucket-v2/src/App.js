import logo from "./logo.svg";
import "./css/App.css";
import MainRouterProvider from "./layout/MainRouterProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="main">
        <MainRouterProvider />
      </section>
    </div>
  );
}

export default App;
