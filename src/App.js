import React from "react";
import "./App.css";
import All from "./components/All/All";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./components/filters/FilteredItems"
import SingleProduct from "./components/filters/SingleProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<All/> }
          ></Route>

          <Route
            path="/filteredItems/:type"
            element={<FilteredProducts/>}
          ></Route>
          <Route
            path="/filteredItems/:type/:id"
            element={<SingleProduct/>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
