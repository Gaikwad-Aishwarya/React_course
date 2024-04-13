import React from "react";
import ReactDOM from "react-dom/client";
const heading=React.createElement("h1", {id:"heading"}, "React Project");

console.log(heading);

const jsxHeading=<h1 id="heading">This is JSX Heading</h1>;

console.log(jsxHeading);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);



/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Objects)==> HTML understands
 *              
 */
       
      /* const pare++++nt= React.createElement("div",{id:"parent"},[
                         React.createElement("div",{id:"child1"},[
                        React.createElement("h1", {}, "I am an h1 tag"), 
                        React.createElement("h2", {},"I am an h2 tag")
                ]),
                        React.createElement("div",{id:"child2"}, [
                        React.createElement("h1", {}, "I am an h1 tag"), 
                        React.createElement("h2", {},"I am an h2 tag")
                ]),
        ]);
        
        
        //const heading=React.createElement("h1", {id:"heading"}, "Hello World from React!");
        console.log(parent);   // object
        const root=ReactDOM.createRoot(document.getElementById("root"));


        root.render(parent);
        
        
        //React.createElement=> object(DOM)=>HTML Element(Render);
        */
       
        