import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import items from "../../data";

import ButtonComponent from "../button.component";

function MenuPageScreen(props) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cart, setCart] = useState(cartItems);
  const [showCart, setShowCart] = useState(true);

  const addToCart = (newItem) => {
    let existingItem = cart.find((item) => item._id === newItem._id);
    if (existingItem) {
      setCart((cartItems) => {
        let newCart = cartItems.map((item) => {
          if (item._id === newItem._id) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        });
        saveToLocal(newCart);
        return newCart;
      });
    } else
      setCart((cartItems) => {
        let newCart = [
          ...cartItems,
          { ...newItem, quantity: 1, extras: false },
        ];
        saveToLocal(newCart);
        return newCart;
      });
  };

  const removeFromCart = (itemId) => {
    setCart((olditms) => {
      const newCart = olditms.filter((itm) => itm._id !== itemId);
      saveToLocal(newCart);
      return newCart;
    });
  };

  const saveToLocal = (newCart) => {
    const jsonString = JSON.stringify(newCart);
    localStorage.setItem("cartItems", jsonString);
  };

  const addExtras = (newItem) => {
    let existingItem = cart.find((item) => item._id === newItem._id);
    if (existingItem) {
      setCart((cartItems) => {
        let newCart = cartItems.map((item) => {
          if (item._id === newItem._id)
            return { ...item, extras: newItem.extras };

          return item;
        });
        saveToLocal(newCart);
        return newCart;
      });
    } else
      setCart((cartItems) => {
        let newCart = [
          ...cartItems,
          { ...newItem, quantity: 1, extras: newItem.extras },
        ];
        saveToLocal(newCart);
        return newCart;
      });
  };

  return (
    <div className="menupage-wrapper">
      <div className="floatingCart" onClick={() => setShowCart((ssc) => !ssc)}>
        <FontAwesomeIcon icon={faShoppingBag} />
        <div className="floatingCart-count">{cart.length}</div>
      </div>

      <div className={`floatingCart-content ${showCart ? "" : "hidden"}`}>
        <div>Your Items</div>
        <div>
          {cart.map((itm) => (
            <div
              className="floatingCart-content-item"
              key={"itemdloat" + itm._id}
            >
              <span onClick={() => removeFromCart(itm._id)}>X</span>

              <span>
                {itm.name}{" "}
                {itm.extras ? <div>with {itm.extras.name}</div> : null}{" "}
              </span>

              <span>{itm.quantity}</span>
            </div>
          ))}
        </div>
        <ButtonComponent cb={() => props.history.push("/cart")} title="Cart" />
      </div>

      <div className="menupage-hero">
        <div className="menupage-hero-nav">
          <div>
            <a href="/">
              <img src={require("../../logo.svg")} alt="" />
            </a>
          </div>
          <div>Café @ Home</div>
          <div>
            {" "}
            <FontAwesomeIcon
              onClick={() => props.history.push("/cart")}
              icon={faShoppingBag}
            />{" "}
          </div>
        </div>
        <div className="menupage-hero-title">MENU</div>
      </div>
      <div className="menupage-content center">
        {items.map((sec, i) => {
          return (
            <div className="menupage-content-section" key={"sectionMenu" + i}>
              <div>{sec.name}</div>
              <div>
                <ul>
                  {sec.content.map((items, id) => (
                    <li key={"itemContent" + i + "" + id}>
                      <div>
                        <img src={items.image} alt="" />
                        <span>{items.name}</span>
                        <span>Rs. {items.price}</span>

                        <span className="menupage-content-section-btns">
                          <button onClick={() => addToCart(items)}>Add</button>
                          {items.extras ? (
                            <button
                              onClick={() => addExtras(items)}
                              className="menupage-content-section-extraBtn"
                            >
                              {items.extras.name} <br /> Rs {items.extras.price}
                            </button>
                          ) : null}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuPageScreen;
