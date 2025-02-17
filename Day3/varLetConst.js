//let/const--block scoped
//var--function(global) scoped

const temp=()=>{
    if(true){
        var a="Raj";
        
    }
    // console.log(a);
};
temp();
// console.log(a); 
//ReferenceError: a is not defined  means var is function scoped

const sumMod=(a,b)=>{
    const ans=(a+b)%10
    function printpretty(txt){
        console.log("-----",txt,"-----");
    }
    printpretty(ans);
    console.log("sum done")
}
sumMod(4,98);
console.log("END");



//
