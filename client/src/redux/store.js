import {combineReducers ,createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { getProductsReducers ,getProductDetailsReducer} from "./reducers/productReducer";
import {cartReducer} from "./reducers/cartReducer"

const reducers=combineReducers({
    getProducts:getProductsReducers,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer
})

const middleware=[thunk];

const store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store; 