import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Status = Object.freeze({
    IDLE:"idle",
    ERROR:"error",
    LOADING:"loading"
})

const productSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        status:Status.IDLE
    },
    reducers:{
        setProducts(state,action){
        // do not calls api in the reducers
        state.data = action.payload
        },
        // setState
        setStatus(state,action){
            state.status = action.payload
        }
    }
})

export const {setProducts, setStatus} = productSlice.actions

export default productSlice.reducer;

// thunk

export function fetchProducts() {
    return function fetchProductThunk(dispatch,getState) {
        dispatch(setStatus(Status.LOADING))
            axios.get("https://fakestoreapi.com/products")
            .then((res)=>{
                dispatch(setStatus(Status.IDLE))
                dispatch(setProducts(res.data))
            })
            .catch((err)=>{
                console.log(err);
                dispatch(setStatus(Status.ERROR))
            })
    }
}