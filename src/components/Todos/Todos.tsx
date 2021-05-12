import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import Todo from "../models/todo";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} onRemove={props.onRemoveTodo} todoId={item.id}>
          {item.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
