import React from "react";
import "../Footer/Footer.scss";
import Namanganliklar from "../../Assets/img/NAMANGANLIKLAR24.svg"

function Footer() {
    return (
        <>
            <footer className="namg-footer">
                <div className="container">

                    <div className="footer-top">
                        <div className="footer-left-logo">
                            <a href="#" className="footer-top-logo"><img src={Namanganliklar} alt="footer-logo"
                                width="173" height="21" /></a>
                        </div>
                        <div className="footer-top-right">
                            <p className="footer-top-right-text">
                                Подписывайтесь на наш канал в Telegram и будьте всегда в курсе самых последних новостей:
                            </p>
                        </div>
                        <div className="footer-top-button">
                            <a href="#" className="footer-top-btn">Подписатся</a>
                        </div>
                    </div>
                    <div className="footer-botton">
                        <ul className="footer-botton-list">
                            <li className="footer-item">
                                <a href="#" className="footer-activ-links">
                                    О сайте
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className=" footer-activ-link">
                                    Воспроизводство, копирование, тиражирование, распростране ние и иное использование
                                    информации с сайта «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного
                                    разрешения редакции.
                                </a>
                            </li>
                        </ul>

                        <ul className="footer-botton-list">
                            <li className="footer-item">
                                <a href="#" className="footer-link">
                                    Информация о сайте
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link">
                                    Напишите нам
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link footer-links">
                                    Реклама
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link">
                                    Прислать новость
                                </a>
                            </li>
                        </ul>
                        <ul className="footer-botton-list footer-links">
                            <li className="footer-item">
                                <a href="#" className="footer-link ">
                                    Использование материалов
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link ">
                                    Темы дня
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link">
                                    Наша команда
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </footer>
        </>
    )
};

export default Footer;