import { createContext, useEffect, useReducer, useState } from "react";
import { onAuthStateChangeListner, signOutMethod } from "../utils/firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../store/user/user-action";

export const userContext = createContext({ currentUser : null, setcurrentUser : () => null });

export const USER_ACTION_TYPE =  {
    SET_CURRENT_USER:"SET_CURRENT_USER"
}

const userReducer = (state, action) => {
    const {type, payload } = action;

    switch(type){
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                currentUser : payload,
            }

        default:
            throw new Error(`Unhandle type ${type} in userReducer`);
    }
}

const initialState = {
    currentUser : null
}

export  const UserProvider = ({ children }) => {
    const reducDispatch = useDispatch();
    const state = useSelector(state => state);
    const [{currentUser}, dispatch] = useReducer(userReducer,initialState );
    console.log(currentUser)
    const setcurrentUser = (user) => {
        dispatch({type:USER_ACTION_TYPE.SET_CURRENT_USER, currentUser:user})
    }
    useEffect(() => {
        const res = onAuthStateChangeListner(user => {
            setcurrentUser(user)
            reducDispatch(setCurrentUser(user));
        })
        return res
    },[])
    console.log(state)
    const value = {currentUser, setcurrentUser};
    return <userContext.Provider value={value}> {children } </userContext.Provider>
}