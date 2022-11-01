import axios from "axios";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const onButtonClick = () => {
    axios.get("/auth/api/test-api").then((res) => console.log(res.data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.s
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
}

export default App;
