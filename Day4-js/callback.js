// const sum=(a,b)=>{
//     const ans=a+b;
//     return ans;
// }

// const printPretty=(txt)=>{
//     console.log("------------");
//     console.log(txt);
//     console.log("------------");
// }
// const res=sum(20,30);
// printPretty(res);
//normal flow

//---------------------------
// const sum=(a,b)=>{
//     const ans=a+b;
//     return ans;
// }

// const printPretty=(txt)=>{
//     console.log("------------");
//     console.log(txt);
//     console.log("------------");
// }
// printPretty(sum(20,30)); //sum is called first and then printPretty is called
//this is not callback fn example

//---------------------------
//callback and higher order fn(HOF) example

const sum=(a,b,c)=>{
    const ans=a+b;
    c(ans);
}

const printPretty=(txt)=>{
    console.log("------------");
    console.log(txt);
    console.log("------------");
}
// sum(20,30,printPretty); 


//sum is called first and then printPretty is called;
//This (printPretty fn is callback fn) is callback fn example and sum is "higher order fn" as it takes another fn as argument

//---------------------------

const arr=[10,20,30]
//using foreach

const newArray=[];
arr.forEach((elem)=>{
    newArray.push(elem*2);
})
// console.log(newArray)

//using map
const mapExample=arr.map((a)=>{
    return a*3;

})
// console.log(mapExample)

//reduce method

//with default
arr.reduce((acc,elem,idx,array)=>{
    // console.log(acc,elem,idx,array)
    return acc //goes to next iteration

},0)
// if no default are there then first element is taken as default

//with default value
arr.reduce((acc,elem,idx,array)=>{
    // console.log(acc,elem,idx,array)
    return acc //goes to next iteration

})
//one less iteration as first value of array is taken as deafult acc

//usecase sum
const ans=arr.reduce((acc,elem,idx,array)=>{
    console.log(acc,elem,idx,array)
    return acc+elem //goes to next iteration

},0)
console.log(ans)//ans is 60

//multiplication

let pro=arr.reduce((acc,elem)=>{
    // console.log(acc,elem)
    return acc*elem //goes to next iteration

})
// console.log(pro)


//can reduce be used as map

const newArr=arr.reduce((acc,elem)=>{
    acc.push(elem*2);
    return acc;
},[])
// console.log(newArr)

//yes