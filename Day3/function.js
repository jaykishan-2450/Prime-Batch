
//type#1
//1.can cause ambiguity as multiple fn can have same names.
//2.Can be accessed before initialization
function print(a, b) {   
    console.log("sum is", a + b); //
}
print(2, 3);

//type#2
//1.Can not be accessed before initialization
const view = function printText(name) {  
    console.log("Hello", name);
}
view("Rahul");

//printText("Rahul");/ //2.PrintText can not be called independently


//type#3
//anonymous function
const see = function (name) {   
    console.log("Hello", name);
}

//type#4
const Arrow = (params) => {
    //Arrow fn body.
}

//Arrow fn example
const mod = (a, b) => {
    return ((a + b) % 18);

}
console.log(mod(43, 9));

//shorter syntax for arr
//1.Remove curly braces and return keyword
const  sumMod10=(a,b)=>(a+b)%10;
console.log(sumMod10(4,98));



// bas aise hi
const changeText = () => {
    let a = document.getElementById("para").innerHTML;
    if (a == "permanent") {
        document.getElementById("para").innerHTML = "temporary";
        return;
    }
    document.getElementById("para").innerHTML = "permanent";

};