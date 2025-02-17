const obj={
    "name":"John",
    name:"jay",
    city:"Delhi",          //if key is same then the last key will be considered
    age:22              //no neee to use quotes for key if it is a single word  
};
// console.log(obj);

//how to access a value
const username=obj.name;
console.log(username);

//how to add a key value pair
obj.country="India";

// console.log(obj.address); //undefined if key is not present

//---------------------------------
//acess a value dynamically

// const key=prompt("enter a key");
// console.log(obj[key]);


//---------------------------------
//update a value
obj.city="MUMBAI";
// console.log(obj);
obj.city="Chennai";
// console.log(obj);


//---------------------------------
//delete a key value pair
delete obj.age;
console.log(obj);

