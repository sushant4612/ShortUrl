import { createContext, useEffect, useState } from "react";


export const UrlContext = createContext();

export const UrlContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [token, setToken] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const logout = () => {
        localStorage.setItem('token', '')
        setToken('')
    }

    useEffect(() => {
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }
    },[])
    
    const value = {
        backendUrl,
        token,
        setToken,
        isOpen,
        setIsOpen,
        logout
    }


    return (
        <UrlContext.Provider value={value}>
            {props.children}
        </UrlContext.Provider>
    )
}
