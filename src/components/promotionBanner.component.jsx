import React from "react";

const wrapperStyle = {
  background: "#5F8ECF",
  textAlign: "center",
  color : "#fff",
  fontSize : "4rem",
  fontFamily: "Raleway",
  fontWeight : "200",
  padding: "3rem 0"
};

function PromotionalBannerComponent() {
  return (
    <div style={wrapperStyle}>
      <div className="center">
      First 50 customers get one complimentary drink of your choice. Can be
      availed within 7 days of your first order.
      </div>
    </div>
  );
}

export default PromotionalBannerComponent;
