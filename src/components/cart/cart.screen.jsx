import React, { useState } from "react";
import ButtonComponent from "../button.component";

function CartScreen() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const removeFromCart = (itemId) => {
    setCart((olditms) => {
      const newCart = olditms.filter((itm) => itm._id !== itemId);
      saveToLocal(newCart);
      return newCart;
    });
  };

  const incrementItem = (itemId) => {
    setCart((olditms) => {
      const newCart = olditms.map((itm) =>
        itm._id === itemId ? { ...itm, quantity: itm.quantity + 1 } : itm
      );
      saveToLocal(newCart);
      return newCart;
    });
  };

  const DecrementItem = (itemId) => {
    setCart((oldItems) => {
      const existingItem = oldItems.filter((itm) => itm._id === itemId)[0];
      
      if (existingItem.quantity <= 1) {
        const newCart = oldItems.filter((itm) => itm._id !== itemId);
        saveToLocal(newCart);
        return newCart;
      } else {
        const newCart = oldItems.map((itm) =>
          itm._id === itemId ? { ...itm, quantity: itm.quantity - 1 } : itm
        );
        saveToLocal(newCart);
        return newCart;
      }
    });
  };

  const saveToLocal = (newCart) => {
    const jsonString = JSON.stringify(newCart);
    localStorage.setItem("cartItems", jsonString);
  };

  const totalPrice = () => {
    let sum = 0;

    cart.map((itm) => {
      if(itm.extras)
      sum += itm.quantity * (itm.price+itm.extras.price);
      else
      sum += itm.quantity * itm.price;
      return itm;
    });

    return sum;
  };

  return (
    <div className="cart-wrapper">
      <a href="/" style={{ textDecoration: "none" }}>
        <div className="cart-nav">
          <div className="cart-nav-logo">
            <img src={require("../../logo.svg")} alt="" />
          </div>
          <div className="cart-nav-title">Café @ Home</div>
        </div>
      </a>
      <div className="cart-head">CART</div>

      <div className="cart-item-wrapper center">
        {cart.map((itm) => (
          <div className="cart-item" key={"cartitems" + itm._id}>
            <div className="cart-item-img">
              <img src={itm.image} alt="" />
            </div>
            <div className="cart-item-name">
            {itm.name}
            {
              itm.extras ? <div>{itm.extras.name}</div> : null
            }
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => incrementItem(itm._id)}>+</button>{" "}
              <span>{itm.quantity}</span>
               <button onClick={()=> DecrementItem(itm._id)} >-</button>
            </div>
            <div className="cart-item-price">
            
              Rs. {itm.extras ? (itm.price+itm.extras.price) * itm.quantity : itm.price * itm.quantity}
            </div>
            <div
              className="cart-item-remove"
              onClick={() => removeFromCart(itm._id)}
            >
              X
            </div>
          </div>
        ))}

        <div className="cart-total">
          <div> Rs. {totalPrice()}</div>
          <ButtonComponent title="Checkout" />
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
