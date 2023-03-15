import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Product: {
        currentProduct: {},
    },
    productCount:0,
    products: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers :{
        setCurrentProducts:(state, action)=>{
            state.Product = action.payload
        },
        setCurrentProductCount:(state)=>{
            state.productCount += 1
        },
        setProducts:(state, action)=>{
            state.products = action.payload
            console.log(state.products)
        }
    }
})

export const {setCurrentProducts, setCurrentProductCount, setProducts} = productSlice.actions;

//selectors
export const selectCurrentProduct = (state) => state.product.Product;

export const selectCurrentProductCount = (state) => state.product.productCount;

export const selectProducts = (state) => state.product.products;


export default productSlice.reducer;