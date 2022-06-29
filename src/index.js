import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import CharactersProvider from "./src/context/CharactersContext";
import AuthProvider from "./src/context/AuthContext";

ReactDOM.render(
  <BrowserRouter>
    <CharactersProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CharactersProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
