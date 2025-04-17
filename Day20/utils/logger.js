
const fs=require('fs/promises');

const saveLogs=(req)=>{
    const date=new Date();
    const log=`${date.toLocaleString()} - ${req.method} - ${req.url}\n`;
    fs.appendFile("logs.txt",log);
}

module.exports={
    saveLogs,
}