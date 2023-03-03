import React from "react";

const Todo = (props) => {
  //const todos = props.propsData;
  const { propsData, deleteDataTodo } = props;
  const handleOnClickDelete = (id) => {
    //alert(id);
    deleteDataTodo(id);
  };
  return (
    <div className="todo-container">
      {propsData.map((todo) => {
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
