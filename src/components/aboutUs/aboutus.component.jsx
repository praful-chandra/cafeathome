import React from "react";

function AboutUsComponent() {
  return (
    <div className="aboutus-wrapper">
      <div className="aboutus-content center">
        <div className="aboutus-content-left">
          <div>About Us</div>
          <div>Top-Notch Beverage Delivery in Bengaluru</div>
          <div>
            Looking for a tasty beverage delivered straight to your door?
            Cafe@Home is here to bring you outstanding beverages– where you want
            them, and when you want them. Whenever you find yourself short on
            time to fix a drink for yourself or you haven’t had the chance to
            swing by the cafe, get in touch with us and we’ll deliver something
            outstanding to your home or workplace. Get in touch to place an
            order online.
          </div>
        </div>
        <div className="aboutus-content-right">
           <div>
           <img src={require("../../asset/about-us-img.png")} alt=""/>
           </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsComponent;
