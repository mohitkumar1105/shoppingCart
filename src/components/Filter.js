import React, { useContext } from "react";
import { CartContext } from "../Context/ContextProvider";

export const Filter = () => {

    const { handleClick, setPosts,filter } = useContext(CartContext)

    const handelFilter = () =>{
        setPosts(filter)
        console.log(filter)
    }


    return (
        <div className="d-flex justify-content-center align-items-center mt-4">
            <div style={{width:"100%", textAlign:"center"}}>
                <button  style={{padding:"5px",width:"150px",marginBottom:"10px"}} className="ms-3" onClick={handelFilter
                }>All</button>
                <button style={{padding:"5px",width:"150px",marginBottom:"10px"}} onClick={() => handleClick("electronics")} className="ms-3">electronics</button>
                <button style={{padding:"5px",width:"150px",marginBottom:"10px"}} onClick={() => handleClick("jewelery")} className="ms-3">jewelery</button>
                <button style={{padding:"5px",width:"150px",marginBottom:"10px"}} onClick={() => handleClick("men's clothing")} className="ms-3">men's clothing</button>
                <button style={{padding:"5px",width:"150px",marginBottom:"10px"}} onClick={() => handleClick("women's clothing")} className="ms-3">women's clothing</button>
            </div>
        </div>
    )
} 