import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// @ts-expect-error service worker
import { registerSW } from "virtual:pwa-register";

import "./styles/reset.css";
import "./styles/index.css";

const updateSW = registerSW({
  onNeedRefresh() {
    updateSW(true);
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
