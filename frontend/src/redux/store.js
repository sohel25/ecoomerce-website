import { createStore,combineReducers, compose, applyMiddleware  } from "redux";
import thunk from "redux-thunk";
import {productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer, productReviewSaveReducer } from "../component/reducer/productReducers";
import {cartReducer} from "../component/reducer/cartReducer";
import Cookie from 'js-cookie';
import { userRegisterReducer, userSigninReducer, userUpdateReducer } from "../component/reducer/userReducers";
import { myOrderListReducer, orderCreateReducer, orderDeleteReducer, orderDetailsReducer, orderListReducer } from "../component/reducer/orderReducer";
const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo= Cookie.getJSON("userInfo") || null;

const initialState={cart:{cartItems , shipping:{},payment:{}},userSignin:{userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails :productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    productSave:productSaveReducer,
    productDelete:productDeleteReducer,
    productReviewSave: productReviewSaveReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderDelete: orderDeleteReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
  
})
const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;