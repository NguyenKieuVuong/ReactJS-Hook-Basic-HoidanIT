import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let [name, setName] = useState("Vương");
  let [address, setAddress] = useState();
  const handleOnClick = () => {
    setName(address);
    console.log("alert");
  };
  const handleOnChange = (event) => {
    setAddress(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}</h1>
        <div className="">
          <input
            type="text"
            value={address}
            onChange={(event) => handleOnChange(event)}
          />
        </div>
        <button type="button" onClick={(event) => handleOnClick(event)}>
          summit
        </button>
      </header>
    </div>
  );
}

export default App;
