import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, remove } from "../redux/slice/cartSlice";

import toast from "react-hot-toast";


export const Product = ({ ele }) => {

    const [btnVisi, setBtnVisi] = useState(false)

    const [toggle, setToggle] = useState(false)

    let desc = `${ele.description.substring(0, 100)}......`
    let desc2 = ele.description


    const show = () => {
        setToggle(!toggle)
    }





    const dispatch = useDispatch()





    const addToCart = () => {
        dispatch(add(ele))
        setBtnVisi(true)
        toast.success("Cart Added")
    }

    const removeCart = () => {
        dispatch(remove(ele.id))
        setBtnVisi(false)
        toast.error("Remove From Car")
    }





    return (
        <div className="col-md-3 mb-4 gap-3">
            <div key={ele.id} class=" h-100 p-4 text-center ms-5 card" style={{ boxShadow: " 12px 12px 2px 1px rgba(0, 0, 255, .2" }}>

                <img src={ele.image} class="card-img-top" height="300px" width="250px" alt="..." />
              

                <div class="card-body">
                    <h5 class="card-title">{ele.title.substring(0, 12)}</h5>
                    <p class="card-text">{toggle ? desc2 : desc} <span style={{ color: "blue" }} onClick={show} >{toggle ? "show less" : "show more"}</span></p>
                    <p class="card-text">{Math.floor(`${ele.price}`)}</p>
                    {btnVisi ? (<button className="p-2 fw-bolder rounde" style={{ background: "green", border: "none", outline: "none", color: "#fff" }} onClick={removeCart}>Remove Cart</button>) :
                        <button className="p-2 fw-bolder rounde" style={{ background: "yellowgreen", border: "none", outline: "none" }} onClick={addToCart}>addCart to Cart</button>
                    }
                </div>
            </div>
        </div>
    )
}