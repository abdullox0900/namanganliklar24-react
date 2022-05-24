import React from "react";
import "../ColumNewsRight/ColumNews.scss";
import UcellImg from "../../Assets/img/ucell.jpg"

function ColumNews() {
    return (
        <>
            <section className="column-news-right">
                <div className="news-right">
                    <ul className="news-right-list">
                        <li className="news-right-item">
                            <a href="#" className="news-right-link">
                                <h4 className="news-right-title">
                                    Cамые популярные новости
                                </h4>
                                <p className="news-right-subtitle">
                                    По факту прорыва Сардобинского <br /> водохранилища <br />
                                    возбуждено уголовное дело
                                </p>
                                <span className="news-right-post-time">
                                    11:31 / 15.05.2020
                                </span>
                            </a>
                        </li>
                        <li className="news-right-item">
                            <a href="#" className="news-right-link">
                                <p className="news-right-subtitle news-right-activ">
                                    По факту прорыва Сардобинского <br /> водохранилища <br />
                                    возбуждено уголовное дело
                                </p>
                                <span className="news-right-post-time">
                                    11:31 / 15.05.2020
                                </span>
                            </a>
                        </li>
                        <li className="news-right-item">
                            <a href="#" className="news-right-link">
                                <p className="news-right-subtitle news-right-activ">
                                    По факту прорыва Сардобинского <br /> водохранилища <br />
                                    возбуждено уголовное дело
                                </p>
                                <span className="news-right-post-time">
                                    11:31 / 15.05.2020
                                </span>
                            </a>
                        </li>
                        <li className="news-right-item">
                            <a href="#" className="news-right-link">
                                <p className="news-right-subtitle news-right-activ">
                                    По факту прорыва Сардобинского <br /> водохранилища <br />
                                    возбуждено уголовное дело
                                </p>
                                <span className="news-right-post-time">
                                    11:31 / 15.05.2020
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <aside className="rec-banner-ucell">
                    <a href="https://ucell.uz/uz/subscribers"><img src={UcellImg} alt="" width="386"
                        height="477"/></a>
                </aside>
            </section>
        </>
    )
}

export default ColumNews;