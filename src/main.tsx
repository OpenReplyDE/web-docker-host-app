import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { initialize } from "@openreplyde/web-docker";

initialize({
  configFilePath: import.meta.env.VITE_WEBDOCKER_CONFIG_FILE_PATH as string,
  logEvents: true,
}).then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
