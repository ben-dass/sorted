import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./Contexts/CategoriesContext";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <CategoriesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CategoriesProvider>,
  document.getElementById("root")
);
