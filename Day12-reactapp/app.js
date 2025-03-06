import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';

const domRoot=document.getElementById("parent");
const reactRoot=ReactDOM.createRoot(domRoot);

const Card=(abc)=>{
    console.log(abc)
    return(
        <div className="card">
            <h1>Hello!{abc.user}</h1>
            <h3>Nice to meet you</h3>
        </div>
    )
}


const App=()=>{
    return(
        <>
        {/* React.createElement("h1",{},"hello from the") */}
        <div>
            <Card user="Aman"></Card>
            <Card user="jay"/>
            {Card({user:"Shivam"})}
        </div>
        </>
    )
};

console.log("hello ywuoe")
n
reactRoot.render(<App/>)