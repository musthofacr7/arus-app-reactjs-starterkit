import React, {useState, createContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider = props =>{
    const [data, setData] = useState({})
    return (
        <AuthContext.Provider value={[data,setData]}>
            {props.children}
        </AuthContext.Provider>
    )
}