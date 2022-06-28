import React from "react";
import "../Header/Header.scss";
import Navbar from "../Navbar/Navbar";
import AsideBanner from "../Aside/Aside";
import Logo from "../../Assets/img/logo.svg"
import { useTranslation } from "react-i18next";
import bootstrap from "bootstrap";
import i18next from "i18next";

const language = [
    {
        code: "uz",
        name: "Uzbekistan",
        country: "uz",
    },
    {
        code: "en",
        name: "English",
        country: "gb",
    },
    {
        code: "ru",
        name: "Rossian",
        country: "ru",
    },
]

function Header() {

    const { t } = useTranslation();

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
                        <div className="dropdown header__dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <ion-icon className="header__glob-icon" name="globe-outline"></ion-icon>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {language.map(({ code, name, country }) => (
                                    <li key={country}>
                                        <button className="dropdown-item"
                                            onClick={() => i18next.changeLanguage(code)}>
                                            <span className={`flag-icon flag-icon-${country}`}></span>&nbsp;
                                            {name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="header-botton">
                            <a href="#" className="header-btn">{t("subscribe")}</a>
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