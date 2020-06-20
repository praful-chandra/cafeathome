import React,{useState} from 'react'
function NavbarComponent() {

    const [scroll,setScroll] = useState(0);
    window.onscroll = (e) => {
        setScroll(window.scrollY);
        
      };
    return (
        <div className={`navbar-wrapper ${scroll > 25 ? "navbar-scrolled" : ""}`} >
           <div className="navbar-content center">
           <div className="navbar-logo">
                <img src={require("../../logo.svg")} alt=""/>
               
            </div>
            <ul className="navbar-menu" >
                    <li> <button><a href="#menuLite">Menu</a></button> </li>
                    <li> <button><a href="#aboutUs">About Us</a></button> </li>
                    {/* <li> <button>Location</button> </li> */}
                    <li> <button><a href="#footer">Contact</a></button> </li>
                    <li> <button><a href="/">Cart</a></button> </li>
                </ul>
           </div>
        </div>
    )
}

export default NavbarComponent
