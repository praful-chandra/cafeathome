import React from 'react';
import ButtonComponent from "../button.component";

function CartScreen() {
    return (
        <div className="cart-wrapper">
           <a href="/" style={{textDecoration : "none"}}>
           <div className="cart-nav">
                <div className="cart-nav-logo">
                    <img src={require("../../logo.svg")} alt=""/>
                </div>
                <div className="cart-nav-title">Café @ Home</div>
            </div>
           </a>
            <div className="cart-head">CART</div>

            <div className="cart-item-wrapper center">
                <div className="cart-item">
                    <div className="cart-item-img">
                        <img src={require("../../asset/coffee/americano.jpg")} alt=""/>
                    </div>
                    <div className="cart-item-name">Americano</div>
                    <div className="cart-item-quantity">
                        <button>+</button> <span>10</span>  <button>-</button>
                    </div>
                    <div className="cart-item-price">Rs. 50</div>
                </div>

                <div className="cart-total">
                <div>Total : Rs130.</div>
                <ButtonComponent title="Checkout" />
            </div>
            </div>
          
        </div>
    )
}

export default CartScreen
