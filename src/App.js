import React from 'react';
import "./scss/root.scss";
import TopBarComponent from "./components/topBar.component";
import NavbarComponent from "./components/navbar/navbar.component";
import HeroComponent from "./components/hero/hero.component";
import MenuLiteComponent from "./components/menu-lite/menuLite.component";
import PromotionalBannerComponent from "./components/promotionBanner.component";
import AboutUsComponent from "./components/aboutUs/aboutus.component";
import InfoBannerComponent from "./components/infoBanner/infoBanner.component";

function App() {
  return (
    <div className="App">
        <TopBarComponent />
        <NavbarComponent />
        <HeroComponent/>
        <MenuLiteComponent/>
        <PromotionalBannerComponent />
        <AboutUsComponent />
        <InfoBannerComponent/>
    </div>
  );
}

export default App;
