import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
function App() {
  let [name, setName] = useState("Vương");
  const [address, setAddress] = useState();
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      works: "learn ReactJS",
      type: "Vương",
    },
    {
      id: "todo2",
      works: "Homework",
      type: "Vương",
    },
    {
      id: "todo3",
      works: "play game",
      type: "Huy",
    },
    {
      id: "todo4",
      works: "play football",
      type: "Vương",
    },
  ]);
  const handleOnClick = (event) => {
    if (!address) {
      alert("input empty!");
      return;
    }
    //setName(address);
    //hook not merge state
    let newTodo = { id: Math.floor(Math.random() * 1000 + 1), works: address };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleOnChange = (event) => {
    setAddress(event.target.value);
  };
  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}</h1>
        <Covid></Covid>
        <Todo
          propsData={todos}
          title="All Todos"
          deleteDataTodo={deleteDataTodo}
        ></Todo>

        <hr />
        <Todo
          propsData={todos.filter((item) => item.type === "Vương")}
          title="Filter Todos"
          deleteDataTodo={deleteDataTodo}
        ></Todo>
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
