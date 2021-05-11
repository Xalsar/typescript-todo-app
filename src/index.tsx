import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Todos from "./components/Todos/Todos";
import Todo from "./components/models/todo";

ReactDOM.render(
  <React.StrictMode>
    <Todos items={[new Todo("Hacer cosas"), new Todo("Hacer mas cosas")]} />
  </React.StrictMode>,
  document.getElementById("root")
);
