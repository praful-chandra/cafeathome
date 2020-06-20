export default [
    {
      _id: 0,
      name: "Tea",
      content: [
        {
          image: require("./asset/tea/asamtea.jpeg"),
          name: "Assam Tea",
          price: 50,
        },
        {
          image: require("./asset/tea/cardamomtea.jpeg"),
          name: "Cardamom Tea",
          price: 50,
        },
        {
          image: require("./asset/tea/LemonHoneyGrentea.jpeg"),
          name: "Lemon Honey Green Tea",
          price: 60,
        },
        {
          image: require("./asset/tea/lemontea.jpg"),
          name: "Lemon Tea",
          price: 40,
        },
        {
          image: require("./asset/tea/masalaTea.jpg"),
          name: "Masala Tea",
          price: 40,
        },
        {
          image: require("./asset/tea/greentea.jpg"),
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
          image: require("./asset/coffee/americano.jpg"),
          name: "Americano",
          price: 50,
        },
        {
          image: require("./asset/coffee/expressoShot.jpeg"),
          name: "Expresso",
          price: 50,
        },
        {
          image: require("./asset/coffee/expressoShot.jpeg"),
          name: "Expresso doubleshot",
          price: 70,
        },
        {
          image: require("./asset/coffee/filtercoffee.jpg"),
          name: "Filter Coffee",
          price: 40,
        },
      ],
    },{
        _id : 2,
        name : "milk",
        content:[
            {
                image : require("./asset/milk/boost.jpeg"),
                name : "Boost",
                price : 40
            },
            {
                image : require("./asset/milk/horlics.jpeg"),
                name : "Horlics",
                price : 40
            },
            {
                image : require("./asset/milk/hotchocolate.jpg"),
                name : "HotChocolate",
                price : 40
            },
        ]
    }
  ];