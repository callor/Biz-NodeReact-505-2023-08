import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

const bbsURL = "http://localhost:8080/gallery/bbs/list";

function App() {
  const [bbs, setBbs] = useState(["제목"]);

  useEffect(() => {
    const ajax = async () => {
      const res = await fetch(bbsURL);
      const result = await res.json();
      setBbs([...result]);
    };
    ajax();
  }, []);

  const bbsList = bbs.map((dto) => {
    return <div>{dto.b_title}</div>;
  });
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <section>{bbsList}</section>
    </>
  );
}

export default App;
