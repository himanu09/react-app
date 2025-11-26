const parent = React.createElement("div", { id: "parent" }, 
                                    React.createElement("div", { id: "child" },
                                      [React.createElement("h1", { id: "grandchild1" }, "Hello, World By Parent and Child!"),
                                      React.createElement("h2", { id: "grandchild2" }, "Hello, World By Parent and Grandchild!")]
                                    )
                                  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);