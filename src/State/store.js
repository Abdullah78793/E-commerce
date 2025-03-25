import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Auth/Reducers";
import { thunk } from "redux-thunk";
import { customerProductReducers } from "./Product/Reducers";
import { cartREducers } from "./Cart/Reducers";
import { orderReducer } from "./Order/Reducers";



const rootRuducers = combineReducers({
    auth:authReducer,
    product:customerProductReducers,
    cart:cartREducers,
    order:orderReducer
})


export const store  = legacy_createStore(rootRuducers,applyMiddleware(thunk))