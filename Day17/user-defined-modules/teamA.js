
console.log("Team A loading...")
const add=require("./teamB.js");


const PROFIT = 100;
const EXPENSES = 20;

// const ans1=add();

// const ans2=add(10,20,30);

// const ans3=add(20,50);

// const ans4=add(1,2,3,4,5);

// const ans5=add(80);

const revenue = add(PROFIT + EXPENSES);
console.log(revenue)

module.exports = {
    PROFIT,
    EXPENSES,
    revenue
};
// console.log(ans1,ans2,ans3,ans4,ans5)
