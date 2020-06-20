import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import ButtonComponent from "../button.component";

function MenuLite() {
  const [selected, setSelected] = useState(-1);
  const items = [
    {
      _id: 0,
      name: "Tea",
      content: [
        {
          image: require("../../asset/tea/asamtea.jpeg"),
          name: "Assam Tea",
          price: 50,
        },
        {
          image: require("../../asset/tea/cardamomtea.jpeg"),
          name: "Cardamom Tea",
          price: 50,
        },
        {
          image: require("../../asset/tea/LemonHoneyGrentea.jpeg"),
          name: "Lemon Honey Green Tea",
          price: 60,
        },
        {
          image: require("../../asset/tea/lemontea.jpg"),
          name: "Lemon Tea",
          price: 40,
        },
        {
          image: require("../../asset/tea/masalaTea.jpg"),
          name: "Masala Tea",
          price: 40,
        },
        {
          image: require("../../asset/tea/greentea.jpg"),
          name: "Green Tea",
          price: 50,
        },
      ],
    },
    {
      _id: 1,
      name: "Coffee",
      content: [
        {
          image: require("../../asset/coffee/americano.jpg"),
          name: "Americano",
          price: 50,
        },
        {
          image: require("../../asset/coffee/expressoShot.jpeg"),
          name: "Expresso",
          price: 50,
        },
        {
          image: require("../../asset/coffee/expressoShot.jpeg"),
          name: "Expresso doubleshot",
          price: 70,
        },
        {
          image: require("../../asset/coffee/filtercoffee.jpg"),
          name: "Filter Coffee",
          price: 40,
        },
      ],
    },{
        _id : 2,
        name : "milk",
        content:[
            {
                image : require("../../asset/milk/boost.jpeg"),
                name : "Boost",
                price : 40
            },
            {
                image : require("../../asset/milk/horlics.jpeg"),
                name : "Horlics",
                price : 40
            },
            {
                image : require("../../asset/milk/hotchocolate.jpg"),
                name : "HotChocolate",
                price : 40
            },
        ]
    }
  ];

  return (
    <div className="menulite-wrapper center">
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
      <ButtonComponent title="View Menu" />

    </div>
  );
}

export default MenuLite;
