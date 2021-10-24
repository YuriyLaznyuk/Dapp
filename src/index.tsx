import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { DAppProvider } from "@usedapp/core";
import { config } from "./public/config";

ReactDOM.render(
  <DAppProvider config={config}>
  <App />

  </DAppProvider>

  ,
  document.getElementById("root")
);
