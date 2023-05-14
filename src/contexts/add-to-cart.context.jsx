import { createContext, useEffect, useState } from "react";


export const AddToCartContext = createContext({items:[], removeItem: () =>{}, addItem: () =>{}, incrementItemCount : () => {}, removeItemCheckout : () => {}, decrementItemCount : () => {}});

export const AddToCartProvide = ({children}) => {
    const [items, setItems]  = useState([]);
    const [totalItems, settotalItems] = useState(0)
    const [totalPrice, settotalPrice] = useState(0);

    useEffect(() => {
        const cartCount = items.reduce((total, item) => total + item.count, 0)
        settotalItems(cartCount)

    }, [items])

    useEffect(() => {
        const price = items.reduce((total,item) => total + item.price * item.count, 0)
        settotalPrice(price)
    }, [items])

    const addItem = (item) => {
        let exist = items?.find(res => res.id === item.id)
        // let total = 0;
        if (exist) {
            let temp = items.map(res => {
                return res.id === item.id ? {...res, count : res.count + 1} : res
            })
            setItems(temp)
            
        }else{
            setItems([...items, {...item, count : 1}])
        }
        // items.map(res => {
        //     total += res.count 
        // })
        // settotalItems(exist ? total + 1 : total);
    }
    const removeItem = (id) => {
        let temp = items?.map(res => res.id !== id);
        setItems(temp)
    }

    const incrementItemCount = (id) => {
        let temp = items.map(res => {
            return id === res.id ? {...res, count :res.count +1} : res
        })
        setItems(temp)
    }
    
    const decrementItemCount = (id) => {
        let temp = items.map(res => {

            // if (id === res.id) {
            //     if (!res.count) {
            //         return;
            //     }else{
                    
            //     }
            // }
            return id === res.id && res.count ? {...res, count :res.count - 1} : res
        })
        setItems(temp)
    }

    const removeItemCheckout = (id) => {
        let temp = items?.filter(res => res.id !== id)
        setItems(temp)
    }

    const value = {items, removeItem, addItem, totalItems, incrementItemCount, totalPrice, removeItemCheckout, decrementItemCount};
    return <AddToCartContext.Provider value={value}>{children}</AddToCartContext.Provider>
}