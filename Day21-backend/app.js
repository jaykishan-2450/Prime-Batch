require("dotenv").config();
require("./src/config/db.js");

const express=require("express");
const morgan=require("morgan");

const {productRouter}=require("./src/api/v1/products/routes/product-routes.js");
const  { authRouter }= require("./src/api/v1/auth/routes/auth-routes.js")
const cors=require("cors")

const PORT = 2200;

const app=express();
app.use(cors());
app.use(express.json());

//App level middlewares
// app.use((req,res,next) => {
//     console.log("Hello...")
// })
 
app.use(morgan("dev"));
app.use("/api/v1/products",productRouter);
app.use("/api/v1/auth",authRouter);

app.listen(PORT,()=>{
    console.log(`---App is running on http://localhost:${PORT}`);
});