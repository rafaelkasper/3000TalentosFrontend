import React from "react";
import ReactDOM from "react-dom/client";
import Inicial from "./pages/inicial/index.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
