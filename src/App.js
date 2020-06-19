import React from 'react';
import "./scss/root.scss";
import TopBarComponent from "./components/topBar.component";
import NavbarComponent from "./components/navbar/navbar.component";
import HeroComponent from "./components/hero/hero.component";
import MenuLiteComponent from "./components/menu-lite/menuLite.component";
function App() {
  return (
    <div className="App">
        <TopBarComponent />
        <NavbarComponent />
        <HeroComponent/>
        <MenuLiteComponent/>

    </div>
  );
}

export default App;
