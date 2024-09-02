import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../App'
import { ConfirmDialog } from './ConfirmDialog';

export const Cart = () => {
    const {cart, setCart} = useContext(cartContext);
    const [price, setPrice] = useState(0);
    const [dialog, setDialog] = useState(false);
    const handlePrice = ()=>{
        let amt=0;
        cart.map((item)=>{
            amt += item.price * item.quantity
        })
        setPrice(amt);
    };

    useEffect(()=>{
        handlePrice();
    }, [cart])

    const handleRemoveItem = (id) =>{
        id.quantity = 1;
        setCart(cart.filter((i)=>i.id !== id.id))
    };
    const orderPlaced = ()=>{
        setDialog(true);
    };

  return (
    <div className="cart-container">
        <h1>Cart ({cart.length})</h1>
        <div className="cart-content">
        {cart.length<=0
        ?<div className='empty-cart'>
            <img src="/assets/icon/illustration-empty-cart.svg" alt="" />
            <p>Your added item will appear here.</p>
        </div>
        :
        <><ul>
        {cart.map((item) => (
           <li key={item.id}>
            <div className="item-details">
                <h5>{item.name}</h5>
                <p>{item.quantity}x <span className="item-price">@ ${item.price}</span><span className="item-total-price">${item.price * item.quantity}</span></p>
            </div>
            <button className='remove-btn' onClick={()=>handleRemoveItem(item)}>
                <img src="/assets/icon/icon-remove-item.svg" alt="" />
            </button>
           </li> 
        ))}
        </ul>
        <div className="total-price">
            <p>Order total</p>
            <h2>${price}</h2>
        </div>
        <div className="carbon-neutral">
        <img src="/assets/icon/icon-carbon-neutral.svg" alt="" />
        <p>This is a <span>carbon-neutral</span> delivery</p>
        </div>
        <button className='confirm-btn' onClick={orderPlaced}>Confirm Order</button>
        </>
        }
        </div>
        {dialog?<ConfirmDialog price={price} setDialog={setDialog}/>:''}
    </div>
  )
}
