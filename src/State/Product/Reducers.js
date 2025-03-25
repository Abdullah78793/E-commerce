import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./Actiontype"

const initialState = {
    products:[],
    product:null,
    loading:false,
    eror:null,
}

export const customerProductReducers = (state=initialState,action) =>{
    switch (action.type) {
       case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return {...state,loading:true,error:null}
       case FIND_PRODUCTS_SUCCESS:
            return {...state,loading:false,error:null,products:action.payload}
       case FIND_PRODUCT_BY_ID_SUCCESS:
        return {...state,loading:false,product:action.payload,error:null}
        case FIND_PRODUCTS_FAILURE:
            case FIND_PRODUCT_BY_ID_FAILURE:
                return {...state,loading:false,error:action.payload}
        default:
            return state;
    }

}