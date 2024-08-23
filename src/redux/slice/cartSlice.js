
import { createSlice } from '@reduxjs/toolkit'




const cartSlice =  createSlice({

    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            console.log("djdbwbhvhd",action.payload);
            state.push(action.payload);
        },

        remove:(state,action)=>{
          let deleteData = state.filter((ele)=>{
                return ele.id !== action.payload
            })

            return deleteData
        },




       



    }

})





export const {add,remove} = cartSlice.actions
export default cartSlice.reducer