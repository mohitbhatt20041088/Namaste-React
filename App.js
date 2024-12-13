const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },

    [
      React.createElement("h1", {}, "Hello I am h1 tag"),
      React.createElement("h2", {}, "Hello I am a sibling and h2 tag"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child" },

    [
      React.createElement("h1", {}, "Hello I am h1 tag-2"),
      React.createElement("h2", {}, "Hello I am a sibling and h2 tag-2"),
    ]
  ),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
