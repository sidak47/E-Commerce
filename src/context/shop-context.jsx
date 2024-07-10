import React from 'react'
import {createContext,useState} from 'react';
import{PRODUCTS} from '../products';
export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems,setcartItems]=useState(getDefaultCart());
    const getTotalCartAmount=()=>{
        let Totalamount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let Iteminfo=PRODUCTS.find((product)=>product.id===Number(item));
                Totalamount+=Iteminfo.price*cartItems[item];
            }
        }
        return Totalamount;
    }
    const addToCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }
    const removeFromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
    const updateCartItemCount=(newCount,ItemId)=>{
        setcartItems((prev)=>({...prev,[ItemId]:newCount})); 
    }
    const contextValue={cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount};
    return( 
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    );
}
