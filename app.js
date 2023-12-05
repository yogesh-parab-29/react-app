const heading = React.createElement("h1", {}, "Hello world from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));



const parent = React.createElement("div",{id:'parent'},[React.createElement("div",{id:"child1"},"Child Element1"),React.createElement("div",{id:"child2"},"Child Element2")])
root.render(parent);
