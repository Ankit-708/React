// simple react

// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz:"abc"}, // here we can give attribute// or call an attributes
//     "Hello World from react!"
// );


// here we are doing some things like above but using nested tag.

const parent = React.createElement(  // createelement is creating an element 
    "div",
    {id: "parents" },
    React.createElement(
        "div",
        {id: "child"},[
        React.createElement("h1", {}, "I'm an h1 tag!"),
        React.createElement("h2", {}, "I'm an h2 tag!")  // siblings or if we want to give more like this then we have put this in an array
        ]
    ),
    React.createElement(
        "div",
        {id: "child2"},[
        React.createElement("h1", {}, "I'm an child h1 tag!"),
        React.createElement("h2", {}, "I'm an child h2 tag!")  // siblings or if we want to give more like this then we have put this in an array
        ]
    )
);

console.log(parent);  //this is an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);