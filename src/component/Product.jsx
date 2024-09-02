import React, { useContext, useEffect, useState } from 'react'
import './product.css'
import { cartContext } from '../App'

export const Product = ({item, index}) => {
    const {cart, setCart} = useContext(cartContext);
    const addCart = ()=>{
        setCart([...cart, item]);
    };

    const handleDecrement = (id)=>{
        if(item.quantity===1){
            setCart(cart.filter((p)=>p.id!==id));
        }
        else{
            const decrement = [...cart];
            decrement.map((item)=>{
                if(item.id===id){
                    item.quantity -= 1;
                }    
            })
            setCart(decrement)
        }
    };
    const handleIncrement = (id)=>{
        const increment = [...cart];
            increment.map((item)=>{
                if(item.id===id){
                    item.quantity += 1;
                }
            })
            setCart(increment)
    };

  return (
    <div>
    <div className="img-field">
        <img className={cart.includes(item)?"item-added":"item-img"} src={item.image.desktop} alt="" />
        {cart.includes(item)
        ?<button className="add-btn-clicked">
            <img onClick={()=>handleDecrement(item.id)} src="./assets/icon/icon-decrement-quantity.svg" alt="" />
            <p>{item.quantity}</p>
            <img onClick={()=>handleIncrement(item.id)} src="./assets/icon/icon-increment-quantity.svg" alt="" />
        </button>
        :<button className="add-btn" onClick={addCart}>
            <img src="./assets/icon/icon-add-to-cart.svg" alt="" />
            <p>Add to Cart</p>
        </button>}
    </div>
    <p>{item.category}</p>
    <h5>{item.name}</h5>
    <span>${item.price}</span>
    </div>
  )
}
