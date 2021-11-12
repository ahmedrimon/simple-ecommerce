import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const reduceTotal = cart.reduce((total, prd) => total + prd.price, 0)
    const total = parseFloat(reduceTotal)

    let shipping = 0
    if(total > 0){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 200){
        shipping = 12.99
    }

    const tax = Math.round(total / 10)
    const grandtotal = (total + shipping + tax).toFixed(2)

    return (
        <div className="whole-cart">
            <h2>Order Summary</h2>
            <p>Items orderd: {cart.length}</p>
            <br/>
            <p>Shipping & Handling: {shipping}</p>
            <p>Total before tax: {(grandtotal / 10).toFixed(2)}</p>
            <p>Estimated Tax: {tax}</p>
            <h2 style={{color: 'red'}}>Order Total: {grandtotal}</h2>
            <button className="cart-button">Review your order</button>
        </div>
    );
};

export default Cart;