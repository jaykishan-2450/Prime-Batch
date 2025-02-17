const arr=["fruits","veg","grains"];

//normal for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(let i in arr){
    console.log("in::",arr[i]);
}

for(let i of arr){
    console.log("of::",i);
}

//while{}
//do{}while()                                                           