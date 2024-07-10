import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'

import {ShopContext} from "../../context/shop-context";
import {CartItem} from './cart-item';
import { useNavigate } from 'react-router-dom';
export const Cart=()=> {
    const{cartItems,getTotalCartAmount}=useContext(ShopContext);
    const Totalamount=getTotalCartAmount();
    const navigate=useNavigate()
  return (
    <div className="cart">
        <div>
            <h1>YOUR CART ITEMS</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id]!==0){
                    return <CartItem  data={product}/>;
                }
            })}
        </div>
        {Totalamount>0 ?
        <div className="checkout">
            <p>Subtotal:{Totalamount}</p>
            <button onClick={()=>navigate('/')}>Continue Shopping</button>
            <button>Checkout</button>
        </div>
        :<h1>Your Cart Is Empty</h1>}
    </div>
  )
}
