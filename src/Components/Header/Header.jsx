import React from "react";
import "../Header/Header.scss";
import Navbar from "../Navbar/Navbar";
import AsideBanner from "../Aside/Aside";
import Logo from "../../Assets/img/logo.svg"


function Header() {
    return (
        <>
            <header className="header-top">
                <div className="container">
                    <div className="header-top-item">
                        <div className="logo-nav-header">
                            <a href="index.html" className="logo-link">
                                <img src={Logo} className="logo-img" alt="logo-bor"
                                    width="306" height="33" /></a>
                            <nav className="nav-item-valyut">
                                <ul className="nav-list-valyut">
                                    <li className="nav-valyut">
                                        <a href="#" className="nav-valyut-link">
                                            <span className="valyut">$</span>10137.2</a>
                                    </li>
                                    <li className="nav-valyut">
                                        <a href="#" className="nav-valyut-link">
                                            <span className="valyut">P</span>138.26</a>
                                    </li>
                                    <li className="nav-valyut">
                                        <a href="#" className="nav-valyut-link">
                                            <span className="valyut">E</span>10988.72</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-botton">
                            <a href="#" className="header-btn">Подписатся</a>
                        </div>

                    </div>

                    <Navbar />

                    <AsideBanner />
                </div>
            </header>

        </>
    )
}

export default Header;