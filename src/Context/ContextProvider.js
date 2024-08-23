import React, { createContext, useState, useEffect } from "react";
import { CartUrl } from "../CartApi";




export const CartContext = createContext()

export const ContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState(posts)




    // const searchApi = `${CartUrl}category/${search}`

    const handleClick = (filtercategory) => {
        let filtering = filter.filter((x) => {
            return x.category === filtercategory
        })
        setPosts(filtering)
    }

   




    async function fetchCart() {

        setLoading(true)

        try {


            const res = await fetch( CartUrl)
            const data = await res.json()
            setFilter(data)
            setPosts(data)
            // const postdata = data
            console.log(data, "sucess")
        }
        catch (err) {
            console.log(err, "Data not Found")
            alert("connection  failed")

        }

        setLoading(false)


    }

    useEffect(() => {
        fetchCart()
    }, [])


    const value = {
        fetchCart,
        loading,
        setLoading,
        posts,
        setPosts,
        handleClick,
        filter,setFilter
        
        
       

    }





    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}