import React, { useContext } from "react"
import { CartContext } from "../Context/ContextProvider"
import { Filter } from "../components/Filter"
import { Loader } from "../components/Loader"

import { Product } from "../components/Product"
import { Homeslider } from "../components/Homeslider"



export const Home = () => {


    const {posts, loading} = useContext(CartContext)

   
    // const {cart} = useSelector((state) => state.cartadd.posts)
    // console.log(cart)



   





    return (




        <div>

            <Homeslider/>


            <Filter />

            {
                loading ? <Loader /> :


                    <div className=" home-product d-flex justify-content-between align-items-center flex-wrap mt-5" style={{ width: "100%" }}>
                     
                        {
                            posts.map((ele) => {

                                return (
                                    <Product key={ele.id} ele={ele}/>
                                )
                            })
                        }
                        
                    </div>



            }



        </div>


    )
}