import React from "react";
import { allData } from "../../assests/data/chunkData";
import ProductsIcons from "./ProductsIcons";

const ProductSection = () => {
  return (
    <div>
      <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
      <h2 className="text-white text-center text-lg font-inter font-bold tracking-normal leading-none">
          T-Shirt SALE 
        </h2>
      </div>
      <div className="grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl">
        {allData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductsIcons
                id={product.id}
                name={product.name}
                img={product.img}
                price={product.price}
                totalPrice={product.totalPrice}
                color={product.color}
                size={product.size}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
