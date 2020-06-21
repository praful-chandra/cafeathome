import React from "react";
import {BrowserRouter ,Route} from "react-router-dom";
import "./scss/root.scss";

import TopBarComponent from "./components/topBar.component";
import NavbarComponent from "./components/navbar/navbar.component";
import HeroComponent from "./components/hero/hero.component";
import MenuLiteComponent from "./components/menu-lite/menuLite.component";
import PromotionalBannerComponent from "./components/promotionBanner.component";
import AboutUsComponent from "./components/aboutUs/aboutus.component";
import AboutUsComponent2 from "./components/aboutUs/aboutUs.2.component";
import InfoBannerComponent from "./components/infoBanner/infoBanner.component";
import FooterCompoenent from "./components/footer/footer.component";

import MenuPage from "./components/MenuPage/menupage.screen";
import CartScreen from "./components/cart/cart.screen";

const homepage = () => (
  <>
    <TopBarComponent />
    <NavbarComponent />
    <HeroComponent />
    <MenuLiteComponent />
    <PromotionalBannerComponent />
    <AboutUsComponent />
    <InfoBannerComponent />
    <AboutUsComponent2 />
  </>
);

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={homepage} />
      <Route exact path="/menu" component={MenuPage} />
      <Route exact path="/cart" component={CartScreen} />
      <FooterCompoenent />
    </div>
   </BrowserRouter>
  );
}

export default App;
