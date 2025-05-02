import React, { useState } from "react";
import { useGetProducts } from "../hooks/useGetProducts";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");

  const { products, loading } = useGetProducts();

  return (
    <div className="p-4 m-4">
      <div className="flex gap-4">
        <input
          className="py-1 px-3 border-1 border-red-700 rounded-md"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="py-1 px-3 border-1 border-black-700 rounded-md bg-purple-700 text-white">
          Search
        </button>
      </div>
      <div>
        <h1 className="text-purple-500 my-6 text-xl">Products</h1>
        <div className="grid grid-cols-3 items-center justify-center gap-4 ">
          {!loading
            ? products.map(({ _id, title, price, stock }) => {
                return (
                  <div
                    className="p-2 border-1 border-purple-700 rounded-md  "
                    key={_id}
                  >
                    <div className="h-9 p-1 bg-red-200 rounded mb-2 truncate">
                      {title}
                    </div>
                    <div className="h-6 bg-purple-100 rounded mb-2">
                      Rs.{price}
                    </div>
                    <div className="h-6 bg-purple-100 rounded">
                      Available: {stock}
                    </div>
                  </div>
                );
              })
            : Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-300 rounded-md bg-gray-200 animate-pulse"
                >
                  <div className="h-9 bg-gray-300 rounded mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded"></div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
