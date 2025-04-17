const { ulid }= require("ulid");
const fs=require("fs/promises");

const saveProductInDB=async (obj)=>{
    obj.id=ulid();
    const oldArray=await getProductsArray();
    oldArray.push(obj);
    saveProductsArray(oldArray);
}

const saveProductsArray=async (arr)=>{
    await fs.writeFile("./data.json",JSON.stringify(arr));

}

const getProductsArray=async()=>{
    try{
        const str=await fs.readFile("./data.json","utf-8");
        const arr=JSON.parse(str);
        return arr;
    }catch(err){
        return [];
    }
}

module.exports={
    saveProductInDB,
}