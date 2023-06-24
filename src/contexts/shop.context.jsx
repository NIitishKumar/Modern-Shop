import { createContext, useEffect, useState } from "react";
import Items from "../shop-data"
import { addCollectionAndDocuments, getCategoriesDoc } from "../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";

export const CategoriesContext = createContext({shopItems : []})

export const CategoriesProvider = ({children }) => {
    const [Categories, setCategories] = useState(Items);
    const dispatch = useDispatch();

// useEffect(() => {
//     const getCategoriesMap = async () => {
//         const data = await getCategoriesDoc()
//         console.log(data)
//         dispatch(setCategories(data))
//     }
//     getCategoriesMap();
// }, [])
    const value  = {Categories};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}