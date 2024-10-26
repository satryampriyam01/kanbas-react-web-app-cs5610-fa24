import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  const handleAddTodo = (newTodo: { id: string; title: string }) => {
    dispatch(addTodo(newTodo));
  };

  const handleUpdateTodo = (updatedTodo: { id: string; title: string }) => {
    dispatch(updateTodo(updatedTodo));
  };

  const handleSetTodo = (updatedTodo: { id: string; title: string }) => {
    dispatch(setTodo(updatedTodo));
  };

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm
          todo={todo}
          setTodo={handleSetTodo}
          addTodo={handleAddTodo}
          updateTodo={handleUpdateTodo}
        />
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
