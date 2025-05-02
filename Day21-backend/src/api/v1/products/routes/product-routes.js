const express=require("express");
const {getProductsController}=require("../contollers/get-products-controller.js");
const {postProductsController}=require("../contollers/post-products-controller.js");
const {validatePostProductDto}=require("../dto/validate-post-products-dto.js")

const productRouter = express.Router();

productRouter.get("/",getProductsController);
productRouter.post("/",validatePostProductDto,postProductsController);
//validatePostProductDto is actually  a middleware

module.exports={
    productRouter,
}
