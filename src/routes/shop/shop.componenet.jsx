import React, { Fragment, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoriesRoute from "../categories/categories";
import ProductCategory from "../category/category";
import { useDispatch } from "react-redux";
import { getCategoriesDoc } from "../../utils/firebase/firebase.utils";
import { getCategories } from "../../store/category/category.action";


function Shop() {  
  const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const data = await getCategoriesDoc()
            console.log(data)
            dispatch(getCategories(data))
        }
        getCategoriesMap();
    }, [])
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
