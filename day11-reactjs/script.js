// console.log(React)
// console.log(ReactDOM)

const domRoot=document.getElementById("parent"); //picked a element from DOM
const reactRoot =ReactDOM.createRoot(domRoot); //assigned the element picked to the React which will act as virtual/pseudo DOM for and make changes in the "domRoot"


//PROTOTYPE:-->const <variable_name>=React.createElement(<type>,<options>,<children>)

// const li1=React.createElement("li",
//     {
//         style:{
//             color:"red",
//         }
//     },
    
//     "Item 1");
// const li2=React.createElement("li",{},"Item 2");
// const li3=React.createElement("li",{},"Item 3");

// const ul=React.createElement("ul",{},[li1,li2,li3])

// reactRoot.render(ul);

// const addItem = () => {

//     const ul = document.createElement("ul");
//     const li1 = document.createElement("li");
//     li1.innerText = "Item 1";
//     const li2 = document.createElement("li");
//     li2.innerText = "Item 2";
//     const li3 = document.createElement("li");
//     li3.innerText = "Item 3";
//     ul.appendChild(li1);
//     ul.appendChild(li2);
//     ul.appendChild(li3);
//     root.appendChild(ul);
// }

// const delItem = () => {
//     root.innerHTML = "";
// }

//--------------------------------------------------------------------------

// const title=React.createElement("h1",{},"Hello from react DOM!"); //object returned by react

// // console.log("type of title:" ,typeof title)
// // console.log("title:",title)


// //creating my own react element 
//  const title2={
//     $$typeof
// : 
// Symbol.for("react.element"),
    

//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         style:{color:"green"},
//         "children": "Hello from react DOM!"
//     },
//     "_owner": null,
//     "_store": {}

   
// }

// reactRoot.render(title2);

//----------------------------------------------------------------------

// const title2=<h1>hello</h1> //React element

const Title2=()=>{
    return <h1>Hello from jsx again</h1>
}

// reactRoot.render(title2()); (Pascal case is nedded for fn to be used as tags in react)
reactRoot.render(<Title2/>) //both statements are same