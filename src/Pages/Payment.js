import React from "react";
import { NavLink } from "react-router-dom";

export const Payment = () => {
    return (

        <div className="d-flex justify-content-center align-items-center container" style={{ height: "100vh" }}>
            <div >
                <h1>Thank you to see our Demo-Project 🙏🏽</h1>
                <br></br><br></br>
                <p>Due to company policy we are not added all style and all functionality to this page.</p><br></br>
                <p>Payment option and all order order related functionality not included. Style of page also not same</p>
                <NavLink to="/">
                    <button style={{ border: "none", outline: "none", padding: "10px", background: "gray" }}>Go to Home page</button> 
                </NavLink>
            </div>
        </div>
    )
}