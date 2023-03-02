import React from "react";

const Todo = (props) => {
  //const todos = props.propsData;
  const { todos, works, deleteDataTodo } = props;
  const handleOnClickDelete = (id) => {
    // alert(id);
    props.c(id);
  };
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return (
          <div className="todo-child" key={todo.id}>
            {todo.works}&nbsp;&nbsp;
            <span onClick={() => handleOnClickDelete(todo.id)}>X</span>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
