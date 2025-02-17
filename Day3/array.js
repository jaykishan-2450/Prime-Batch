const arr=["fruits","vegetables","meat","dairy",24];
// console.log(arr);
console.log(arr.length); //size of array

arr.push("banana");
console.log(arr);

//-----------------------------------------------
//how to access
console.log(arr[0]);
arr[3]="Amazon";

//delete a value
delete arr[1];
// console.log(arr); //leaves undefined holes in array

//instead use pop() to remove last element and shift() to remove first element
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);





