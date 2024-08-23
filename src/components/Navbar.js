import React, { useContext, useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IoIosListBox } from "react-icons/io";




export const Navbar = () => {
  


    const {cart} = useSelector((state) => state)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{color:"greenyellow", width:"100%",}}>
            <div className="container">
                <Link to="/" style={{textDecoration:"none"}}>
                <div>
                <h3 style={{color:"yellowgreen"}}>Shopping</h3>
                </div>
                
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon " style={{color:"greenyellow", fontSize:"30px"}}>< IoIosListBox/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center" >
                        <li className="nav-item me-5">
                            <Link to="/" className="nav-link active ms-5" aria-current="page" style={{ fontSize:"25px", color:"yellowgreen" }}>Home</Link>
                        </li>

                        <div style={{position:"relative"}}>
                            <li className="nav-item">
                                <Link to="/cart" style={{ fontSize:"35px", color:"yellowgreen" }} className="nav-link" >< FaCartArrowDown /></Link>

                            </li>

                            <span className="count" style={{position:"absolute", top:"0", right:"0" }}>{cart.length}</span>

                        </div>



                    </ul>

                </div>
            </div>
        </nav>
    )
}