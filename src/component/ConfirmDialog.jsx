import React, { useContext } from 'react'
import { cartContext } from '../App'
import './confirmDialog.css'

export const ConfirmDialog = ({price, setDialog}) => {
    const {cart, setCart} = useContext(cartContext);
    const confirmed = ()=>{
        setDialog(false);
        cart.map((item) => {
            item.quantity = 1;
        });
        setCart([]);
    };
  return (
    <div id='body'>
        <div className='container'>
        <img src="./assets/icon/icon-order-confirmed.svg" alt="" />
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
        <div className="items">
            <ul>
                {cart.map((item) => (
                <li key={item.id}>
                <img src={item.image.desktop} alt="" />
                <div className="item-details">
                    <div className="item">
                    <h4>{item.name}</h4>
                    <p>{item.quantity}x <span className="item-price">@ ${item.price}</span></p>
                    </div>
                    <span className="total-price">${item.price * item.quantity}</span>
                </div>
                </li> 
                ))}
            </ul>
        </div>

        <div className="order-total">
            <p>Order Total</p>
            <h2>${price}</h2>
        </div>

        <button className='confirm-btn' onClick={confirmed}>Confirm Order</button>
    </div>
    </div>
  )
}
