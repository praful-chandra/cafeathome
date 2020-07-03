import React from 'react'

function CartOverlay(props) {
    return (
        <div className="cartoverlay" >
            <div className="cartoverlay-close" onClick={props.cb}>X</div>
            <div className="cartoverlay-body">
                <form action="#">
                    <input type="text" name="name" placeholder="name" id="" required/>
                    <input type="tel" name="phone" placeholder="phonenumber" id="" required/>
                    <input type="email" name="email" placeholder="Email address" id="" required/>
                    <textarea name="address" id="address" cols="30" rows="10" placeholder="Enter your address" required></textarea>
                    <button type="submit">Order Now</button>
                </form>
            </div>
        </div>
    )
}

export default CartOverlay;
