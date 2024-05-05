import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("app")!).render(
  // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </Provider>
);
