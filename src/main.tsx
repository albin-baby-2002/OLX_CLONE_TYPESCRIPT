import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FirebaseContext } from "./store/firebaseContext.ts";
import { Firebase } from "./Firebase/config.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FirebaseContext.Provider value={Firebase}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>
);
