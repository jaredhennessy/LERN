import React from "react";

function Header() {
    return (
        <div>
            {/* <a href="index.html" className="brand-logo"> */}
            <img id="logo-img" alt="banner" src={require("../../images/banner.jpg")} />
            {/* </a> */}
        </div>
    )
}

export default Header;