import axios from "axios";

import * as actionTypes  from "../constants/productConstants";

const URL="https://backend-api-8276.onrender.com/";


export const getProducts=()=>async(dispatch)=>{
    try {
            const {data}= await axios.get(`${URL}/products`);
            // console.log(response);
            dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message});
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data    } = await axios.get(`${URL}/product/${id}`);
        
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};





// let obj = {
//     config: {},
//     data: [],
//     headers: {},
//     status: 200,
//     message:""
//     }
//     obj.data 

//     //by using object destructing
//     { data } = obj;