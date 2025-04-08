const sum=(...rest)=>{
    const ans =rest.reduce((acc,num)=>{
        return acc+num;

    },0);
    return ans;
}

module.exports=sum;
console.log("team B loading>>>")
const obj = require('./teamA.js');

console.log(`${obj.EXPENSES} ___ ${obj.PROFIT} ___ `)