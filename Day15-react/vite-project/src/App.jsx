import React, { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  //approach1

  // const getData=()=>{
  //   const pr1=fetch("https://dummyjson.com/products");
  //   pr1.then((res)=>{
  //     console.log("Response:",res);
  //     const pr2=res.json();
  //     pr2.then((data)=>{
  //       console.log(data);
  //     })

  //   }).catch((err)=>{
  //     console.log("Error:",err);
  //   });
  // }

  //alternate approach#2 to write promises
  //pr2.then(res=>res.json()).catch(err=>clg(err)).then(data=>clg(data));

  //approach#3
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({});
  const [currPage, setCurrPage] = useState(0);
  const getData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${currPage}`);
      const temp=await response.json();
      setData(temp);
      setProducts(temp.products);
      console.log("Products:", products);
      console.log("data:", data);
    } catch (err) {
      console.log("error:", err);
    } finally {
      console.log("completed successfully");
    }
  };


  useEffect(() => {
    getData();
  }, [currPage]);


  const totalPages=Math.ceil(data.total/data.limit);
  const pages = [];

  for(let i=0;i<totalPages;i++){
    pages.push(i+1);
  }

  return (
    <>
      <h1>Products</h1>
      <select onChange={(e)=>setCurrPage(parseInt(e.target.value))}>
        {
          pages.map((i)=>{
            return <option>{i}</option>
          })
        }
      </select>
      {products?.map((product,idx) => {
        return (
          <Card
            key={product.id}
            id={idx+1}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
          />
          // optional chaining
          // conditional rendering(ternary operator)
          // nullish coalescing operator
          // <div key={product.id}>
          //   <h2>{product.title}</h2>
          //   <p>${product.price}</p>
          //   <img src={product.thumbnail} alt={product.title} />
          // </div>
        );
      })}
    </>
  );
};

export default App;
