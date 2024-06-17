import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CheckboxProvider } from "./pages/SelectLevelPage/CheckboxContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CheckboxProvider>
      <RouterProvider router={router}></RouterProvider>
    </CheckboxProvider>
  </React.StrictMode>,
);
