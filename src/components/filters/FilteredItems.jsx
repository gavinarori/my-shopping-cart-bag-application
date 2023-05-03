import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from "../error/Error";
import {filterItems,filterByGender,sortBySize,sortByColor,sortByPrice} from "../../features/slices/itemSlice";

const FilteredItems = () => {
  const products = useSelector((state) => state.item.filteredItems);
  const error = useSelector((state) => state.item.error);
  const { type } = useParams();
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (
    <div className=" dark:bg-gray-900 h-full w-full">
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none  dark:text-white">
            {type}
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
  <div class="flex justify-between items-center">
    {genderButtons.map((item, index) => {
      return (
        <div key={index}>
          <Button
            color="gray"
            size={window.innerWidth < 640 ? "sm" : "lg"}
            variant="outlined"
            ripple={true}
            className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4 dark:text-white"
            onClick={() => dispatch(filterByGender(item))}
          >
            {item}
          </Button>
        </div>
      );
    })}
  </div>
  <div class="flex justify-between items-center">
    <Button
      color="gray"
      size={window.innerWidth < 640 ? "sm" : "lg"}
      variant="outlined"
      ripple={true}
      className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4 dark:text-white"
      onClick={() => dispatch(sortByPrice())}
    >
      High Price
    </Button>
    <Menu>
      <MenuHandler>
        <Button
          color="gray"
          size={window.innerWidth < 640 ? "sm" : "lg"}
          variant="outlined"
          ripple={true}
          className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4 dark:text-white"
        >
          Select a color
        </Button>
      </MenuHandler>
      <MenuList>
        {colorButtons.map((item, index) => {
          return (
            <MenuItem
              style={{ color: item }}
              key={index}
              onClick={() => dispatch(sortByColor(item))}
            >
              {item}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  </div>
  <div class="flex justify-between items-center">
    <Menu>
      <MenuHandler>
        <Button
          disabled={type === "" || type === "Shoes"}
          color="gray"
          size={window.innerWidth < 640 ? "sm" : "lg"}
          variant="outlined"
          ripple={true}
          className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4 dark:text-white"
        >
          Select a size
        </Button>
      </MenuHandler>
      <MenuList>
        {sizeButtons.map((item, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => dispatch(sortBySize(item))}
            >
              {item}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
    <Button
      color="gray"
      size={window.innerWidth < 640 ? "sm" : "lg"}
      variant="outlined"
      ripple={true}
      className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4 dark:text-white"
      onClick={() => dispatch(filterItems(type))}
    >
      Clear Filter
    </Button>
  </div>
</div>

        </div>
        {error ? (
          <Error></Error>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl dark:bg-gray-900 h-full w-full">
        
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index} className=" dark:text-white">
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredItems ;
