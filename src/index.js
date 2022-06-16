import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import CharactersProvider from "./src/context/CharactersContext";

ReactDOM.render(
  <BrowserRouter>
    <CharactersProvider>
      <App />
    </CharactersProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
