import React from "react";
import "../News/News.scss";
import ShavkatMirziyoyev from "../../Assets/img/shavkat-mirziyoyev.jpg";
import Karantin from "../../Assets/img/karantin.jpg";
import Sardoba from "../../Assets/img/sardoba.jpg";
import Prokuror from "../../Assets/img/prokuror.jpg";
import TezYordam from "../../Assets/img/tez-yordam.jpg";
import StopKarantin from "../../Assets/img/stop-karantin.jpg";

function News() {
    return (
        <>
            <section className="news-box">
                <div className="container">
                    <div className="news-list">
                        <ul className="card-list">
                            <li className="card-item cards-items">
                                <a href="#" className="card-link">
                                    <img src={ShavkatMirziyoyev} className=".card-item-img" alt="bu yerda rasim bor"
                                        width="386" height="190" />
                                    <h2 className="card-title">
                                        Мирзиёев рассказал, зачем было построено
                                        Сардобинское водохранилище
                                    </h2>
                                    <span className="time-post">05:28 / 16.05.2020</span>
                                </a>
                            </li>
                            <li className="card-item cards-items">
                                <a href="#" className="card-link">
                                    <img src={Karantin} className=".card-item-img" alt="bu yerda rasim bor"
                                    width="386" height="190" />
                                    <h2 className="card-title">
                                        Карантин в Узбекистане продлен <br /> до 1 июня
                                    </h2>
                                    <span className="time-post">05:28 / 16.05.2020</span>
                                </a>
                            </li>
                            <li className="card-item cards-items">
                                <a href="#" className="card-link">
                                    <img src={Sardoba} className=".card-item-img" alt="bu yerda rasim bor" width="386"
                                    height="190"/>
                                    <h2 className="card-title">
                                        Обмелевшая Сардоба: стихия или
                                        человеческий фактор?
                                    </h2>
                                    <span className="time-post">05:28 / 16.05.2020</span>
                                </a>
                            </li>
                            <li className="card-item cards-activ">
                                <a href="#" className="card-link">
                                    <img src={Prokuror} className=".card-item-img" alt="bu yerda rasim bor"
                                    width="386" height="190" />
                                    <h2 className="card-title">
                                        Следствие проверяет четыре версии
                                        прорыва Сардобинской плотины
                                    </h2>
                                    <span className="time-post">05:28 / 16.05.2020</span>
                                </a>
                            </li>
                            <li className="card-item cards-activ">
                                <a href="#" className="card-link">
                                    <img src={TezYordam} className=".card-item-img" alt="bu yerda rasim bor"
                                    width="386" height="190" />
                                    <h2 className="card-title">
                                        Выявлено еще 7 случаев <br /> коронавируса
                                    </h2>
                                    <span className="time-post">05:28 / 16.05.2020</span>
                                </a>
                            </li>
                            <li className="card-item cards-activ">
                                <a href="#" className="card-link">
                                    <img src={StopKarantin} className=".card-item-img" alt="bu yerda rasim bor"
                                    width="386" height="190"/>
                                    <h2 className="card-title">
                                        Итоги второго месяца <br /> карантина
                                    </h2>
                                    <span className="time-post">05:28 / 16.05.2020</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="full-banner-box">
                        <div className="banner-box">
                            <a href="#" className="banner-img-text">Хотите узнать новости первыми? подключите уведомления!</a>
                            <button className="ben-btn">Включит уведомления!</button>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default News;