import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import items from "../../data";
import ButtonComponent from "../button.component";

function MenuLite() {
  const [selected, setSelected] = useState(-1);


  return (
    <div className="menulite-wrapper center" id="menuLite">
      <div className="menulite-title">Our Menu</div>
      <div className="menulite-subtitle">Classic Recipes & Amazing Taste</div>

      <div className="menulite-menu-wrapper">
        {items.map((cate, i) => (
          <div
          onClick={()=>selected === i ? setSelected(-1) : setSelected(i)}
            className={`menulite-menu-dropdown ${
              i === selected ? "menulite-menu-dropdown-selected" : ""
            }`}
            key={cate._id}
          >
            <div className="menulite-menu-item">
              <FontAwesomeIcon
                icon={faAngleDown}
                className="menulite-menu-item-icon"
              />
              <span>{cate.name}</span>
            </div>
            <div className={`menulite-menu-details ${selected !== i ? "hidden" : ""}`}>
              {cate.content.map((itm, index) => (
                <div
                  className="menulite-menu-details-item"
                  key={"item" + Math.random() + "" + index}
                >
                  <div className="menulite-menu-details-item-left">
                    <div className="menulite-menu-details-item-img">
                      <img src={itm.image} alt="" />
                    </div>
                    <div className="menulite-menu-details-item-name">
                      {itm.name}
                    </div>
                  </div>
                  <div className="menulite-menu-details-item-right">
                    Rs.{itm.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
     <a href="/menu"> <ButtonComponent title="View Menu" /></a>

    </div>
  );
}

export default MenuLite;
