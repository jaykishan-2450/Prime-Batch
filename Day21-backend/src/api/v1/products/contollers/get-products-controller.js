const { ProductModel } = require("../../../../models/product-schema");

const getProductsController= async (req,res)=>{
    console.log("Request Recieved");
    
    const { page = 1 , limit = 20, q = ""} = req.query;
    
    let mongooseQuery = ProductModel.find();

    const regexMatch = new RegExp(q,"i"); //g is for sensitive searching

    mongooseQuery  = mongooseQuery.where("title").regex(regexMatch); //i for case insensitivity while matching

    const queryClone = mongooseQuery.clone();
    const totalProducts = await queryClone.countDocuments();;

    mongooseQuery = mongooseQuery.sort("_id");
    mongooseQuery = mongooseQuery.skip((page-1)* limit);
    mongooseQuery = mongooseQuery.limit( limit );

    const productList = await mongooseQuery;


    //to force 5 se conds delay in sending response
    await new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        }, 1000);
    });

    res.send({
        status:"get api success",
        data:{
            products:productList,
            page:page,
            limit:limit,
            total:totalProducts,
        }
    });
};

module.exports={
    getProductsController,
}