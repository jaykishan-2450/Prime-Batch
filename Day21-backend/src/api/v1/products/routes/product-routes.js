const express=require("express");
const {getProductsController}=require("../contollers/get-products-controller.js");
const {postProductsController}=require("../contollers/post-products-controller.js")

const productRouter = express.Router();

productRouter.get("/",getProductsController);
productRouter.post("/",postProductsController);


module.exports={
    productRouter,
}
