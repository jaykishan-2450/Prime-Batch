const user=prompt("Enter your name");

const nos=parseInt(prompt("Enter the number of subjects:"));

let obj={};
console.log(obj);
let highest=0,sum=0,subj;
for(let i=0;i<nos;i++){
    let sub=prompt("Enter the subject");
    let marks=parseInt(prompt("Enter the marks"));
    obj[sub]=marks;
    sum+=marks;
    if(marks>highest){
        highest=marks;
        subj=sub;
    }
}
console.log("Highest marks::",highest,"in subject",subj);
let perc=(sum/nos);
console.log("Percentage::",perc);



if(perc>90){
    console.log("Grade:: A+");
}else if(perc>80){
    console.log("Grade:: A");}
else if(perc>70){
    console.log("Grade:: B");}
else if(perc>60){
    console.log("Grade:: C");
}else if(perc>=33){
    console.log("Grade:: D");
}else{
    console.log("Fail");
}
