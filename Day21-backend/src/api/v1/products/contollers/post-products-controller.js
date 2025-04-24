const {ProductModel}=require("../../../../models/product-schema.js")

const postProductsController=async (req,res)=>{

    const obj =req.body;

    const newProduct = await ProductModel.create(obj);
    console.log(newProduct)

    console.log("Request Recieved");
    res.json({
        // status:"fail",
        // message:"Work in progress"
        status:"post apii success",
        data:{
            products:newProduct,
        }
    });
};

module.exports={
    postProductsController,
}