import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let [name, setName] = useState("Vương");
  const [address, setAddress] = useState();
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      works: "learn ReactJS",
    },
    {
      id: "todo2",
      works: "Homework",
    },
    {
      id: "todo3",
      works: "play game",
    },
  ]);
  const handleOnClick = (event) => {
    if (!address) {
      alert("input empty!");
      return;
    }
    //setName(address);
    //hook not merge state
    let newTodo = { id: "abc", works: address };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleOnChange = (event) => {
    setAddress(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}</h1>
        <div className="todo-container">
          {todos.map((todo) => {
            return (
              <div className="todo-child" key={todo.id}>
                {todo.works}
              </div>
            );
          })}
        </div>
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
