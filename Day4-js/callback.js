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
sum(20,30,printPretty); 


//sum is called first and then printPretty is called;
//This (printPretty fn is callback fn) is callback fn example and sum is "higher order fn" as it takes another fn as argument

//---------------------------