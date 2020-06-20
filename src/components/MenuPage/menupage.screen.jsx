import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import items from "../../data";

function MenuPageScreen() {
  return (
    <div className="menupage-wrapper">
        <div className="floatingCart">
        <FontAwesomeIcon icon={faShoppingBag} />
        <div>0</div>
        </div>
      <div className="menupage-hero">
        <div className="menupage-hero-nav">
          <div>
            
            <a href="/"><img src={require("../../logo.svg")} alt="" srcset="" /></a>
          </div>
          <div>Café @ Home</div>
          <div> <FontAwesomeIcon icon={faShoppingBag} /> </div>
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
                        <button>Add</button>
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
