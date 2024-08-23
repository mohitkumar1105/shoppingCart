import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/cartSlice";
import toast from "react-hot-toast";







export const CartItem = ({ ele }) => {


    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(remove(ele.id))
        toast.error("Remove from cart")
    }


    return (

        <div className="mt-4">
            <div className="d-flex justify-content-around align-items-center mb-5">
                <img src={ele.image} lass="card-img-top img-thumbnail" width={"100px"} alt="clothes img" />
                <p>{ele.title.substring(0, 12)}</p>
               
                <p>{Math.floor(ele.price)}</p>
                <h4 style={{ color: "red", cursor: "pointer", marginBottom:"20px" }} onClick={handleDelete}><MdDelete /></h4>
            </div>

            <div>


            </div>



        </div>
    )
}