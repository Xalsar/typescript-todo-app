import { useState } from "react";
import Todos from "./components/Todos/Todos";
import NewTodo from "./components/NewTodo/NewTodo";
import Todo from "./components/models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodos((prevTodos) => {
      return [...prevTodos, new Todo(todoText)];
    });
  };

  const removeTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;
