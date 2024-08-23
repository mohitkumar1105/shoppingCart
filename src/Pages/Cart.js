import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../components/CartItem";
import { Link } from "react-router-dom";
import { FaLuggageCart } from "react-icons/fa";



export const Cart = () => {

    const [total, setTotal] = useState(0)

    const { cart } = useSelector((state) => state)

    useEffect(() => {
        setTotal(cart.reduce((total, num) => {
            return Math.floor(total + num.price)
        }, 0))
    }, [cart])



    return (
        <div className="container">

            {
                cart.length === 0 ?
                    <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", color: "greenyellow", background: "" }}>
                        <div>
                            <h3 style={{ fontSize: "50px" }}>Cart Empty</h3>

                            <div>

                                <h1 style={{ fontSize: "100px", textAlign: "center" }}><FaLuggageCart /></h1>
                            </div>



                            <Link to="/">
                                <div style={{ textAlign: "center" }}>
                                    <button style={{ padding: "10px", background: "greenyellow", color: "black", fontWeight: "bold", width: "100%" }}>
                                        Shop Now
                                    </button>

                                </div>
                            </Link>
                        </div>
                    </div> :

                    <div className=" border-dark border-bottom border-52 ">

                        {
                            cart.map((ele) => {

                                return (

                                    <CartItem key={ele.id} ele={ele} />

                                )
                            })
                        }


                        <div>

                            <h2 style={{textAlign:"end"}}>{`Total Amount ₹${total}`}</h2>
                        </div>

                    </div>







            }




        </div>
    )
}