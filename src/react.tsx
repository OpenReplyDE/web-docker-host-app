import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.tsx";

const create = () =>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default create;
