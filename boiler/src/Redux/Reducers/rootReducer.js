import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import { CartReducer } from "./CartReducer";
import { LoaderReducer } from "./LoaderReducer";

const rootReducer = combineReducers({
    products:ProductReducer,
    cartProduct:CartReducer,
    loader:LoaderReducer
})

export default rootReducer