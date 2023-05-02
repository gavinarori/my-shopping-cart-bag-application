import React, { useState , useEffect} from "react";
import Cart from "../cart/cart";
import Toggle from "../themes/toggle";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };


  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="flex justify-around items-center  dark:bg-gray-900 h-full w-full">
        <div>
        <h2 className="text-2xl font-bold leading-7 sm:text-sm text-gray-900 sm:truncate sm:leading-none sm:font-body sm:tracking-tight dark:text-white">
          HOME SHOP.
        </h2>
        </div>
        <div className="flex flex-row items-center">
        <div className="inline-flex items-center rounded-md bg-white px-3 py-2 mx-2 text-sm font-semibold text-white  hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
      <Toggle onToggle={handleThemeToggle} isDarkMode={isDarkMode}/>
      </div>
          <div className="flex flex-row items-center mx-2" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className=" font-inter text-base font-medium tracking-normal leading-none text-center mr-2 dark:text-white">
              Whish List
            </p>
          </div>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}

            <p className=" font-inter text-base font-medium tracking-normal leading-none text-center dark:text-white">
              Shopping bag
            </p>
            <div>
              {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
            </div>
           
          </div>
        </div>
      </div>
      
      
    </>
  );
};

export default Navbar;
