import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Todos from "./components/Todos/Todos";

ReactDOM.render(
  <React.StrictMode>
    <Todos items={["Hacer cosas", "Hacer mas cosas"]} />
  </React.StrictMode>,
  document.getElementById("root")
);
