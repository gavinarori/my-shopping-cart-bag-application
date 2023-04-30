import React from 'react';
import Slider from "./components/slider/slider";
import Navbar from './components/navbar/navbar';
import ProductSection from './components/products/ProductSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <ProductSection/>
      </div>
  );
}

export default App;
