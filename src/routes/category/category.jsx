import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card';
import { CategoriesContext } from '../../contexts/shop.context';
import "./category.style.scss"

function ProductCategory() {
    const { category } = useParams();
    const { Categories }  = useContext(CategoriesContext);
    const [products, setproducts] = useState([]);
    useEffect(() => {
        Categories?.map(res => {
            console.log(res.title)
            if (res.title?.toLowerCase() === category.toLowerCase()) {
                setproducts(res.items)
            }
        })
        // setproducts(Categories[products])
    }, [category, Categories])
    console.log(Categories, products)
  return (
    <div className='category-container'>
        {
            products.length && products?.map((res, i) => {
                return <ProductCard key={i} product={res} />
            })
        }
    </div>
  )
}

export default ProductCategory