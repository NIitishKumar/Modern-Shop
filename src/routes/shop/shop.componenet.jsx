import React, { Fragment, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoriesRoute from "../categories/categories";
import ProductCategory from "../category/category";


function Shop() {  
  return (
      <Routes>
          <Route index element={<CategoriesRoute />}/>
          <Route path=":category" element={<ProductCategory />} />
      </Routes>
  );
}

export default Shop;

// obj["items"]?.map((res,i) => {
//   return (
//      <ProductCard key={res.id} product={res} />
//   )
// })
