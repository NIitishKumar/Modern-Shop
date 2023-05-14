import { createContext, useEffect, useState } from "react";
import { onAuthStateChangeListner, signOutMethod } from "../utils/firebase/firebase";

export const userContext = createContext({ currentUser : null, setcurrentUser : () => null })

export  const UserProvider = ({ children }) => {
    const [ currentUser, setcurrentUser] = useState(null);
    useEffect(() => {
        const res = onAuthStateChangeListner(user => {
            setcurrentUser(user)
        })
        return res
    },[])
    const value = {currentUser, setcurrentUser};
    return <userContext.Provider value={value}> {children } </userContext.Provider>
}