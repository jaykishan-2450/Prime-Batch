const { ProductModel } = require("../../../../models/product-schema");

const getProductsController= async (req,res)=>{
    console.log("Request Recieved");
    const productList = await ProductModel.find();
    res.send({
        // status:"fail",
        // message:"Work in progress"
        status:"get api success",
        data:{
            products:productList,

        }
    });
};

module.exports={
    getProductsController,
}