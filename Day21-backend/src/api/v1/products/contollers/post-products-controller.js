const { ProductModel } = require("../../../../models/product-schema.js");

const postProductsController = async (req, res) => {
  try {
    const obj = req.body;
    const newProduct = await ProductModel.create(obj);

    res.status(201);
    res.json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log(err.name);
    console.log(err.code);
    if (err.name === "MongoServerError" && err.code === 11000) {
      res.status(400);
      res.json({
        status: "fail",
        err: err.message,
      });
    } else {
      res.status(500);
      res.json({
        status: "fail",
        err: "Internal Server Error",
      });
    }
  }

  // const obj =req.body;

  // const newProduct = await ProductModel.create(obj);
  // console.log(newProduct)

  // console.log("Request Recieved");
  // res.json({
  //     // status:"fail",
  //     // message:"Work in progress"
  //     status:"post apii success",
  //     data:{
  //         products:newProduct,
  //     }
  // });
};

module.exports = {
  postProductsController,
};
