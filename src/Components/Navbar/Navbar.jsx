import React from "react";
import "../Navbar/Navbar.scss";

function Navbar() {
    return (
        <>
            <nav className="header-navbar">
                <ul className="header-nav-item">
                    <li className="header-nav-list"><a href="#" className="header-nav-link">Узбекистана</a></li>
                    <li className="header-nav-list"><a href="#" className="header-nav-link">Мир</a></li>
                    <li className="header-nav-list"><a href="#" className="header-nav-link">Экономика</a></li>
                    <li className="header-nav-list"><a href="#" className="header-nav-link">Политика</a></li>
                    <li className="header-nav-list"><a href="#" className="header-nav-link">Общество</a></li>
                    <li className="header-nav-list"><a href="#" className="header-nav-link">Технологии</a></li>
                    <li className="header-nav-list"><a href="#" className="header-nav-link">Спорт</a></li>
                    <li className="header-nav-list"><a href="#" className="header-nav-link">Культура</a></li>
                    <li className="header-nav-list"><a href="#" className="header-nav-link">Происшествия</a></li>
                    <li className="header-nav-list"><a href="#" className="header-nav-link">Туризм</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
