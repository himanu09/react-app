import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child", key: "child" },
    [
      React.createElement("h1", { id: "grandchild1", key: "g1" }, "Hello, World By Parent and Child!"),
      React.createElement("h2", { id: "grandchild2", key: "g2" }, "Hello, World By Parent and Grandchild!"),
      React.createElement("h3", { id: "grandchild3", key: "g3" }, "Hello, World By  GrandChild3!"),
      React.createElement("h4", { id: "grandchild4", key: "g4" }, "Hello, World By  GrandChild4!")
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);