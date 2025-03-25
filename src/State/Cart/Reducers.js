import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_FAILURE, REMOVE_CART_REQUEST, REMOVE_CART_SUCCESS, UPDATED_CART_FAILURE, UPDATED_CART_REQUEST, UPDATED_CART_SUCCESS } from "./ActionType"

const initialState = {
    cart:null,
    cartItems:[],
    loading:false,
    error:null,
}

export const cartREducers = (state=initialState,action) =>{
    switch (action.type) {
       case ADD_ITEM_TO_CART_REQUEST:
        return {...state,loading:true,error:null}
       case ADD_ITEM_TO_CART_SUCCESS:
        return {...state,cartItems:[...state.cartItems,action.payload.cartItems],loading:false}
        case ADD_ITEM_TO_CART_FAILURE:
            return {...state,loading:false,error:action.payload}
        case GET_CART_REQUEST:
            return {...state,loading:true}
        case GET_CART_SUCCESS:
            return {...state,cartItems:action.payload.cartItems,cart:action.payload,loading:false}
        case GET_CART_FAILURE:
            return {...state,loading:false,error:action.payload}
        case REMOVE_CART_REQUEST:
        case UPDATED_CART_REQUEST:
             return {...state,loading:true}
        case REMOVE_CART_SUCCESS:
            return {...state,cartItems:state.cartItems.filter(
                (item)=>item.id!==action.payload
            ),loading:false}
         case UPDATED_CART_SUCCESS:
            return {...state, cartItems:state.cartItems.map(
                (item)=>item.id===action.payload.id? action.payload:item
            ),loading:false}
        case REMOVE_CART_FAILURE:
        case UPDATED_CART_FAILURE:
            return {...state,loading:false,error:action.payload}                        
            
        default:
         return state;
    }
}