import React from "react";

function AboutUsComponent2() {
  return (
    <div className="aboutus-wrapper">
      <div className="aboutus-content center">
        <div className="aboutus-content-left">
          <div></div>
          <div>Classic Recipes & Amazing Taste</div>
          <div>
            We pride ourselves on making outstanding beverages that will treat
            your tongue to all sorts of delights. There’s nothing quite like
            delivery when you simply can’t find the will to fix a drink after a
            long day of work. We also offer a variety of drinks throughout the
            week, so you don’t need to order the same thing day in and day out
            (unless you want to).
          </div>
        </div>
        <div className="aboutus-content-right">
          <div>
            <img src={require("../../asset/about-us-img-2.jpg")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsComponent2;
