import React from "react";
import "../Banner/Banner.scss";
import IphoneImg from "../../Assets/img/iphone-banner.png";
import GoogleIconImg from "../../Assets/img/googleplay.png";
import AppStoreImg from "../../Assets/img/appstore.png";

function Banner() {
    return (
        <>
            <section className="botton-banner">
                <div className="container">
                    <div className="get-banner">

                        <div className="get-img-left">
                            <img src={IphoneImg} alt="bu yerda telegram iphone rasmi bor" width="210"
                                height="177" />
                        </div>

                        <div className="get-text-center">
                            <h4 className="get-title">Всегда будьте в курсе последних новостей!</h4>
                            <p className="get-subtitle">
                                Установите мобильное приложение NAMANGANLIKLAR24
                                и все новости в вашем кармане!
                            </p>
                        </div>

                        <div className="get-img-right">
                            <a href="#" className="get-images-link">
                                <img className="img-get-one" src={GoogleIconImg} alt="google play icon rasmi bor"
                                    width="160" height="50" />
                            </a>
                            <a href="#" className="get-images-link">
                                <img className="img-get-two" src={AppStoreImg} alt="applestore icon rasmi bor"
                                    width="164" height="50" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Banner;