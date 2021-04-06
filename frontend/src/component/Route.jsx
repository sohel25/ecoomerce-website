import React from 'react';

import {Route } from "react-router-dom";
import ProductScreen from "../screen/ProductScreen";
import HomeScreen from "../screen/HomeScreen";
import CartScreen from '../screen/CartScreen';
import SiginScreen from '../screen/SiginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import ProductsScreen from '../screen/ProductsScreen';
import ShippingScreen from '../screen/ShipingScreen';
import PaymentScreen from '../screen/PaymentScreen';
import PlaceOrderScreen from '../screen/PlaceOrderScreen';
import ProfileScreen from '../screen/ProfileScreen';
import OrdersScreen from '../screen/ordersScreen';
import OrderScreen from '../screen/orderScreen';

// import Header from "./Header";

function ProductList() {
  
    return (
        <div>
            <main className="main">
        <div className="content">
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/orders" component={OrdersScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/products" component={ProductsScreen} />
          <Route path="/signin" component={SiginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route exact path ="/product/:id"  component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen}/>
          <Route path ="/" exact={true} component={HomeScreen} />
        

     
        </div>

      </main>
        </div>
    )
}

export default ProductList
