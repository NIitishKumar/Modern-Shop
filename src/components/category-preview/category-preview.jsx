import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import ProductCard from '../product-card/product-card'
// import "./category-preview.scss"
import { CategoryContainer, Link, Preview, Title } from './category-preview.style'

function CategoryPreview({title, products}) {
    const history = useParams()
    return (
    // <div className='category-preview-container'>
    <CategoryContainer>
        <Title>
            <Link to={{pathname:`${title}`}}>{title?.toUpperCase()}</Link>
        </Title>
        <Preview>
            {
                products?.filter((_, idx) => idx < 4).map((product) => ( <ProductCard key={product.id} product={product} />))
            }
        </Preview>
    {/* </div> */}

    </CategoryContainer>
  )
}

export default CategoryPreview