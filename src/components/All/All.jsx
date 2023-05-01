import React from "react";
import Navbar from "../navbar/navbar";
import Slider from "../slider/slider";
import NavigateButtons from "../NavButtons/NavButtons";
import ProductSection from "../products/ProductSection";

const Main = () => {
  return (
    <div>
      <Navbar/>
      <NavigateButtons/>
      <Slider/>
      <ProductSection/>
    </div>
  );
};

export default Main;
