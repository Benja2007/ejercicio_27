import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Importa BrowserRouter
import App from "./components/App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    {" "}
    {/* Envuelve tu aplicación con <Router> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  rootElement // Cierra el rootElement sin coma adicional
);
