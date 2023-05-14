import { NavLink } from "react-router-dom";
import { BackgroundImage, CategoryContainer, CategoryTitel, DirectoryCategoryContainer } from "./category-item.styles.jsx";

export const CategoryItem = ({ category }) => {
  const { imageUrl, title, id, route } = category;
  return (
    <DirectoryCategoryContainer key={id} >
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryContainer>
        <CategoryTitel>{title}</CategoryTitel>
        <NavLink to={route}><p>Shop Now</p></NavLink>
      </CategoryContainer>
    </DirectoryCategoryContainer>
  );
};
