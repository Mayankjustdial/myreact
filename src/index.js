import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssInReact from "./component/CssInReact/CssInReact";
import CssInReactInline from "./component/CssInReact/CssInReactInline";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <App />
    <CssInReactInline />
    <CssInReact />
  </div>
);
