export default [
    {
      _id: 0,
      name: "Tea",
      content: [
        {
          _id:"01",
          image: require("./asset/tea/asamtea.jpeg"),
          name: "Assam Tea",
          price: 50,
        },
        {
          _id:"02",
          image: require("./asset/tea/cardamomtea.jpeg"),
          name: "Cardamom Tea",
          price: 50,
        },
        {
          _id:"03",
          image: require("./asset/tea/LemonHoneyGrentea.jpeg"),
          name: "Lemon Honey Green Tea",
          price: 60,
        },
        {
          _id:"04",
          image: require("./asset/tea/lemontea.jpg"),
          name: "Lemon Tea",
          price: 40,
        },
        {
          _id:"05",
          image: require("./asset/tea/masalaTea.jpg"),
          name: "Masala Tea",
          price: 40,
        },
        {
          _id:"06",
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
             _id:"11",
          image: require("./asset/coffee/americano.jpg"),
          name: "Americano",
          price: 50,
        },
        {
             _id:"12",
          image: require("./asset/coffee/expressoShot.jpeg"),
          name: "Expresso",
          price: 50,
        },
        {
             _id:"13",
          image: require("./asset/coffee/expressoShot.jpeg"),
          name: "Expresso doubleshot",
          price: 70,
        },
        {
             _id:"14",
          image: require("./asset/coffee/filtercoffee.jpg"),
          name: "Filter Coffee",
          price: 40,
        },
      ],
    },{
        _id : 2,
        name : "milk",
        content:[
            {   _id:"21",
                image : require("./asset/milk/boost.jpeg"),
                name : "Boost",
                price : 40
            },
            {   _id:"22",
                image : require("./asset/milk/horlics.jpeg"),
                name : "Horlics",
                price : 40
            },
            {   _id:"23",
                image : require("./asset/milk/hotchocolate.jpg"),
                name : "HotChocolate",
                price : 40
            },
        ]
    }
  ];