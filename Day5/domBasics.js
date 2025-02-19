//console.log(document)  -->window object represents :B.O.M
//console.dir(document)  //-->document object represents :D.O.M

//document is given by window.So,window.document -->document

//------------------------------------------------------

//finding / searching the element

//1.document.getElementById("id-name")  -->null / element

//2.document.getElementsByClassName("class-name") -->Iterable []/[e,e,e,e,....]=>{HTML collection 0-size(if class name is not present i html )/n>0-size}

//3. document.getElementsByTagName() --> iterable []/[e,e,e.....] 

//4.document.querySelector("tagname/.classname/tagname.classname") --> select the first element mentioned
//5.document.querySelectorAll()


//-----------------------------------------------

// const elem=document.getElementById("text");
// console.dir(elem);
// elem.style.color="red";


const ele=document.getElementsByClassName("text")
console.dir(ele)