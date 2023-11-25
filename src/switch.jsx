import React from "react";
import Logo from "./Assests/Personal.jpg"

const Navbars = () => {
    return (
        <React.Fragment>
            <header>
                <img className="logo" src= {Logo} alt="logo"/>
                    <nav>
                        <ul className="navbar">
                            <li><a href="/">About Us</a> </li>
                            <li><a href="#">Career</a> </li>
                            <li><a href="#">Departments</a> </li>
                            <li><a href="./sign">sign in</a></li>
                        </ul>
                    </nav>
            </header>
        </React.Fragment>
    )
};

export default Navbars;