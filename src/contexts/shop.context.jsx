import { createContext, useEffect, useState } from "react";
import Items from "../shop-data"
import { addCollectionAndDocuments, getCategoriesDoc } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({shopItems : []})

export const CategoriesProvider = ({children }) => {
    const [Categories, setCategories] = useState(Items);
    
useEffect(() => {
    const getCategoriesMap = async () => {
        const data = await getCategoriesDoc()
        console.log(data)
        setCategories(data)
    }
    getCategoriesMap()
}, [])
    const value  = {Categories};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}