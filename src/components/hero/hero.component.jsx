import React from 'react'

import "./hero.styles.scss";

function HeroComponent() {
    return (
        <div className="hero-wrapper " >
            <div className="hero-heading">
                <div className="hero-heading-main">Café @ Home</div>
                <div className="hero-heading-sub">Sizzling Hot Beverages at your doorstep in 25min.</div>
                <a href="/menu">    <button className="hero-heading-btn">Order Now</button></a>
            </div>
            <div className="hero-foot">
                <div>Sun - Sat 8:00 Am - 8:00 Pm</div>
                <div>IndraNagar,Domlur,JeevanBheemaNagar</div>
            </div>
        </div>
    )
}

export default HeroComponent
