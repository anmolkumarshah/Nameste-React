/**
 * 
 * <div id = "parent">
 *  
 *  <div id = "child1">
 *      <h1>h1 tag</h1>
 *      <h1>h1 second tag tag</h1>
 *  </div>
 * 
 *  <div id = "child2">
 *      <h1>h1 tag</h1>
 *      <h1>h1 second tag tag</h1>
 *  </div>
 * 
 * 
 * </div>
 * 
 */



const heading = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child1" },
            [React.createElement("h1", {}, "h1 tag"), React.createElement("h2", {}, "h2 tag")]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [React.createElement("h1", {}, "h1 tag"), React.createElement("h2", {}, "h2 tag")]
        )
    ]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(heading);