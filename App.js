import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement=>ReactElement->JS object=>HTML element render

//React element
const heading=React.createElement("h1", {id:"heading"}, "React Project");

console.log(heading);

//jsx = transpiled before it reaches the JS=parcel=bable=js to react

//jsx=Babel transpiles it to=>React.createElement=>ReactElement->JS object=>HTML element render
const jsxHeading=<h1 className="head" tabIndex="1">This is JSX Heading</h1>;

console.log(jsxHeading);

//React Component
//1.Class based components
//2.Functional components

/*const HeadingComponent1= () => {
        <div id="container">
        return <h1>This is a Functional Component</h1>;
        </div>
};

*/
const HeadingComponent2 = function () {  
                return(
                <h1>This is a Functional Component2</h1>)
        };

        const number = 1000;
        const elem=<span>React Element</span>
const HeadingComponents3 = () => { 
       <div>Hello
        {/* {heading}
        {elem}

        <HeadingComponent2 /> //Component Composition
        <h1 className="heading3">This is a Functional Component3</h1>;
        <h2>{number}</h2> */}
        </div>
};

const root=ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
root.render(<HeadingComponents3 />);



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
       
        