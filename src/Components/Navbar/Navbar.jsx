import React from "react";
import "../Navbar/Navbar.scss";
import { useTranslation } from "react-i18next";

function Navbar() {

    const { t } = useTranslation();

    return (
        <>
            <nav className="header-navbar">
                <ul className="header-nav-item">
                    <li className="header-nav-list"><a href="#" className="header-nav-link">{t ("uzbekistan")}</a></li>
                    <li className="header-nav-list"><a href="#" className="header-nav-link">{t ("world")}</a></li>
                    <li className="header-nav-list"><a href="#" className="header-nav-link">{t ("economy")}</a></li>
                    <li className="header-nav-list"><a href="#" className="header-nav-link">{t ("politics")}</a></li>
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
