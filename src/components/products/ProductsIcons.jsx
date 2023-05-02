import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

const ProductsIcons = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];
  
  const [showIcons, setShowIcons] = useState(false);
  const [like,setLike] = useState(false)

  const handleLike = ()=>{
    setLike(!like)
  }
  

  const handleIconToggle = () => {
    setShowIcons(!showIcons);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
      })
    );
  };

  return (
    <div>
      <Card
        className="lg:w-full sm:w-1/2 relative dark:bg-gray-900 h-full  "
        onMouseEnter={handleIconToggle}
        onMouseLeave={handleIconToggle}
      >
        <CardHeader floated={false} className="lg:h-96 sm:sm:h-3/4 ">
          <img src={img} alt={name} />
          {showIcons && (
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
              <div className="flex space-x-2">
                <Tooltip content="Add to cart" placement="top">
                  <Button
                    onClick={handleAddToCart}
                    color="white"
                    buttonType="link"
                    size={window.innerWidth < 640 ? "sm" : "lg"}
                    rounded={false}
                    iconOnly
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke-width="1.5"
                     stroke="currentColor" 
                     class="w-6 h-6">
                     <path stroke-linecap="round"
                      stroke-linejoin="round" 
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>

                  </Button>
                </Tooltip>
                <Tooltip content="Add to wishlist" placement="top">
                  <Button
                    onClick={handleLike}
                    color="white"
                    buttonType="link"
                    size={window.innerWidth < 640 ? "sm" : "lg"}
                    rounded={false}
                    iconOnly
                  >
                    
                    {like ?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg>:<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6">
                        <path strokeLinecap="round"
                         strokeLinejoin="round" 
                         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
}
                  </Button>
                </Tooltip>
            </div>
        </div>)}
    </CardHeader>
    <CardBody className="text-center  dark:bg-gray-900 h-full w-full">
          <Typography variant="h4" color="blue-gray" className="mb-2 dark:text-white ">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium dark:text-white" textGradient>
            {text}
          </Typography>
          <div className="flex justify-between items-center pt-4">
            <Typography color="red" className="font-medium" textGradient>
              Size left:{" "}
              <span className="text-gray-400 text-base font-extralight dark:text-white">
                {defaultSize}
              </span>
            </Typography>
            <Typography color="gray" className="font-medium dark:text-white" textGradient>
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2 dark:text-white"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
</Card>
</div>
);
};

export default ProductsIcons;
