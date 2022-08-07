import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// css파일을 import 하여 적용시킨다.
// import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
