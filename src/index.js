import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import CharactersProvider from "./src/context/CharactersContext";

ReactDOM.render(
  <CharactersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CharactersProvider>,
  document.getElementById("root")
);
