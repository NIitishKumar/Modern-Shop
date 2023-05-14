import React, { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview";
import ProductCard from "../../components/product-card/product-card";
import { CategoriesContext } from "../../contexts/shop.context";
import "./categories.style.scss";

function CategoriesRoute() {
  const { Categories } = useContext(CategoriesContext);
  
  return (
    <div className="category-preview-container">
      {Categories.map((obj) => {
           return <CategoryPreview key={obj["title"]} title={obj["title"]} products={obj["items"]} />;
      })}
    </div>
  );
}

export default CategoriesRoute;