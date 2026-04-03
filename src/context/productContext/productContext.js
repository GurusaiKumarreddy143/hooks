import React, { useEffect, useState } from 'react'
import { handleUsers } from '../../apis/productAPIs'

export const productContext = React.createContext()

export const ProductContextProvider = ({ children }) => {
    const [productdata, setProductData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await handleUsers()
            setProductData(data)
        }
        fetchData()
    }, [])

    return (
        <productContext.Provider value={productdata}>
            {children}
        </productContext.Provider>
    )
}