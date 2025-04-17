const express=require("express");
const fs=require('fs/promises');

const { saveLogs }=require("./utils/logger.js");
const { saveProductInDB } =require( "./database/db.js");

const server=express();
server.use(express.json());

const PORT=2100;

//middleware example
server.use((req,res,next)=>{
    // console.log(Object.keys(req))
    saveLogs(req);
    next();

})

server.get("/",(req,res)=>{
    // console.log(req.url,req.method);
    // res.send("<h1>Hello World</h1>");
    res.json({
        status:"success",
        message:`server is running at ${PORT}`
    })
});


server.post("/products",async (req,res)=>{

    // console.log(req.url,req.method);
    // const body = req.body;
    // let old = [];
    // try{
    //     await fs.access("./product.json");
    // }
    // catch(err){
    //     console.log("file not found");
    //     await fs.writeFile("./product.json",JSON.stringify(old));
    // }
    // old= await fs.readFile("./product.json","utf-8");
    // old = old ? JSON.parse(old) : [];
    // old.push(body);
    // await fs.writeFile("./product.json",JSON.stringify(old));
    // res.send('product added');
    
    const data=req.body;
    try{
        saveProductInDB(data);

        res.json({
            status:"success",
            message:"Porduct stored"
        });
    }catch(err){
        console.log("/products",err.message);
        res.status(500);
        res.json({
            status:"fail",
            message:"something went wrong.."
        });
    }
    
});

//This middleware triggers only when there are non-matching url
server.use((req,res,next)=>{
    res.json({
        status:"success",
        message:"You are trying to access a route which is not defined yet"
    })

})


server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})