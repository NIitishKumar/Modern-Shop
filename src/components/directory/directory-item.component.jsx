import React from "react";
import { CategoryItem } from "../category-item/category-item.component";
import "./directory.styles.scss"

function Directory({categories}) {
  return (
    <div>
      {" "}
      <div className="directory-container">
        {/* <img /> */}
        {categories?.map((res) => {
          return <CategoryItem key={res.id} category={res} />;
        })}
      </div>
    </div>
  );
}

export default Directory;
