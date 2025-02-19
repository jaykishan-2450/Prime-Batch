//hello 
// console.dir(document)
// console.dir(document.children[0].children[1].children[1]);
//(document.children[0].children[1].children[1]).style.backgroundColor="blue";

//This is difficult to execute

//--------------------------
//using querySelector and ..All


// document.querySelector("div").style.backgroundColor="blue";
// const obj=document.querySelectorAll("div div");

// obj.forEach((ele)=> ele.style.backgroundColor="yellow")

//using getElementsByTagName("div")

// const outerDiv=document.getElementsByTagName("div");
// outerDiv[0].style.backgroundColor="blue";


//HTML collection can not iterated using array methods.
//while "forEach" can be used on NODEDLIST   !other methods like map/reduce cant be accessed
// for(let i=1;i<5;i++) outerDiv[i].style.backgroundColor="red";

// console.log(outerDiv)

//---------------------------------------------------------------------------------
const mappings = {
    Invitation:"you are invited to the party",
    Reminder : "you are reminded of the party",
    Notice : "you are notified of the party",
    Message : "you are messaged of the party",
};

// const obj=document.querySelectorAll("div div");
// obj.forEach((ele)=>{ele.children[1].textContent=mappings[ele.children[0].textContent]});

///----------------------------------------------------------------------------------------

const newElement=document.createElement("div");

const rootElement=document.querySelector("body");
newElement.innerText="Hi from DOM!"
rootElement.appendChild(newElement)

// Object.entries(mappings).forEach(()=>{
//     const newDiv=document.createElement("div");
//     newDiv.innerText="Hi from DOM! "
//     newElement.appendChild(newDiv);

// })

Object.entries(mappings).forEach((elem)=>{
    const newDiv=document.createElement("div");
    newDiv.innerHTML=`<h4>${elem[0]}</h4> <p>${elem[1]}</p>`;
    newDiv.style.border='1px solid red';
    newElement.appendChild(newDiv);

})


const expDiv=document.createElement("div");
expDiv.innerText="Hi from DOM!";
expDiv.style.backgroundColor="red";
rootElement.appendChild(expDiv)
expDiv.addEventListener("click",()=>{
    let color=expDiv.style.backgroundColor;
    console.log(color)
    if(color=="red"){
        expDiv.style.backgroundColor="yellow";

    }else{
        expDiv.style.backgroundColor="red";
    }
});

//when css is not inline the javascript can not access css at first click/event hence changes doesnot reflect;





