import React from "react";

const Todo = (props) => {
  const todos = props.propsData;
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return (
          <div className="todo-child" key={todo.id}>
            {todo.works}
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
