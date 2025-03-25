
import { api } from "../../Config/apiConfig"
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./Actiontype"
export const findProducts = (reqData) => async (dispatch) => {
    const { category, sizes, color, pageNumber, minPrice, maxPrice, minDiscount, pageSizes, sort, stock } = reqData;
    dispatch({ type: FIND_PRODUCTS_REQUEST });
    
    try {
      const { data } = await api.get(`/api/products?color=${color}&sizes=${sizes}&pageNumber=${pageNumber}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sort}&stock=${stock}&pageSize=${pageSizes}&category=${category}&minDiscount=${minDiscount}`);
      console.log("Product data ", data);
      dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
      
    } catch (error) {
      console.error("Error occurred while fetching products:", error);
      dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
    }
  };
  
export const findProductById = (reqData) => async (dispatch) => {
    const  {productId} = reqData
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
          try {
              const {data} =await api.get(`/api/products/id/${productId}`)
              dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
          } catch (error) {
              dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error})
          }
  }