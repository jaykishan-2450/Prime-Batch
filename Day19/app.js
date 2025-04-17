const http = require("http");
const fs = require("fs/promises");
const {ulid}=require("ulid")

const server = http.createServer((req, res) => {
  // console.log(req.url);

  const { url, method } = req;
  //   console.log("url:", url);
  const [path, query] = url.split("?");
  const qs = query.split("&");
  const obj = {};
  for (let i = 0; i < qs.length; i++) {
    const [key, value] = qs[i].split("=");
    obj[key] = value;
  }

  if (path === "/products" && method === "POST") {
    // console.log("query:", query);
  }
  //woohoooooo maza aa gya
  console.log("obj:", obj);
  const fun = async () => {
    const oldData = await fs.readFile("./data.json", "utf-8");

    // console.log("oldData", typeof oldData);
    //datatype of oldData is string

    const oldDataArr = JSON.parse(oldData || "[]");

    // console.log("oldDataArr", typeof oldDataArr);
    // const newData = [...oldDataArr, obj];
    // console.log("newData", typeof newData);

    const idx=oldDataArr.findIndex(({name,price})=>{
        if(name===obj.name && price===obj.price) return true;
    });

    if(idx==-1){
        obj.id=ulid();
        oldDataArr.push(obj);

    } 
    else{
        oldDataArr[idx].stock=Number(oldDataArr[idx].stock)+Number(obj.stock);
    }

    fs.writeFile("./data.json", JSON.stringify(oldDataArr));
  };
  fun();
  res.end(
    JSON.stringify({
      status: "success",
    })
  );
});

server.listen(3000, (err) => {
  if (err) console.log(err);
  else {
    console.log("server is running at http://localhost:3000");
  }
});
