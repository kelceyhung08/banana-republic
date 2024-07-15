import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CreateAccountScreen from "./screens/create-account/create-account.screen.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CreateAccountScreen />
  </React.StrictMode>
);
