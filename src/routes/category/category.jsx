import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card';
import "./category.style.scss"
import { useSelector } from 'react-redux';
import { categorySelector } from '../../store/category/category.selector';

function ProductCategory() {
    const { category } = useParams();
    const Categories = useSelector(categorySelector);
    const [products, setproducts] = useState([]);
    useEffect(() => {
        Categories?.map(res => {
            console.log(res.title)
            if (res.title?.toLowerCase() === category.toLowerCase()) {
                setproducts(res.items)
            }
        })
    }, [category, Categories])
    
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