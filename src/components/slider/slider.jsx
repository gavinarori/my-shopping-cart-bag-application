import React from "react";
import {
 leftSlide,
  rightSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { SliderData } from "../../assests/data/chunkData";

const Slider = () => {
  const slideActions = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  return (
    <div className="relative pb-4  dark:bg-gray-900 h-full w-full">
      <div>
        {SliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideActions
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideActions && (
                  <img
                    className="h-full w-[1700px]"
                    src={item.img}
                    alt="shoes"
                  ></img>
                )}
              </div>
              <div className="absolute top-44 mx-auto inset-x-1/4 hidden md:block">
                    <p className="text-white text-4xl font-inter font-bold tracking-normal leading-none">
                        {parseInt(item.id) === slideActions && item.text}
                   </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-12  left-[45%]">
        {SliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={dot.id}>
              <div
                className={
                  index === slideActions
                    ? "bg-green-300 rounded-full p-2 cursor-pointer"
                    : "bg-white rounded-full p-2 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="absolute top-[50%] right-4 sm:right-0 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(rightSlide(slideActions + 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className="absolute top-[50%] left-4 sm:left-2 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(leftSlide(slideActions - 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
