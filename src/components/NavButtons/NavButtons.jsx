import React from "react";
import { Button } from "@material-tailwind/react";
import { filterItems } from "../../features/slices/itemSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const buttons = [
    "shoes",
    "T-Shirts",
    "Jacket",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center py-8  dark:bg-gray-900 h-full w-full text-black bg-sky-500">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={"/filteredItems/" + button}>
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black hover:bg-gray-300 duration-300 ease-in-out dark:text-white"
                  onClick={() => dispatch(filterItems(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavigateButtons;
