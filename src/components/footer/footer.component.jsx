import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt , faEnvelope} from "@fortawesome/free-solid-svg-icons";

function FooterComponent() {
    return (
        <div className="footer-wrapper" id="footer">
            <div className="footer-contact center">
                <div> Contact Us </div>
                <div>
                    <div><span> <FontAwesomeIcon icon={faPhoneAlt} /> </span> <a href="tel:++91 80881 12774">+91 80881 12774</a> </div>
                    <div><span> <FontAwesomeIcon icon={faEnvelope} /> </span><a href="mailto:cafeathome25@gmail.com">cafeathome25@gmail.com</a></div>
                </div>
            </div>
            {/* <div className="footer-gallery">
                <div className="footer-gallery-item"></div>
                <div className="footer-gallery-item"></div>
                <div className="footer-gallery-item"></div>
                <div className="footer-gallery-item"></div>
                <div className="footer-gallery-item"></div>
                <div className="footer-gallery-item"></div>
                <div className="footer-gallery-item"></div>
                <div className="footer-gallery-item"></div>
                <div className="footer-gallery-item"></div>
                <div className="footer-gallery-item"></div>

            </div> */}
        </div>
    )
}

export default FooterComponent
