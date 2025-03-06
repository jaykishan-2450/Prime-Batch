import React from "react";
import ReactDOM from "react-dom";


const domRoot=document.getElementById("parent");
const reactRoot=ReactDOM.createRoot(domRoot);

const Title=<h1>Hello</h1>;
reactRoot.render(Title)