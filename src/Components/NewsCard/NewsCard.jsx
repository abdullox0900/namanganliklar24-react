import React from "react";
import "../NewsCard/NewsCard.scss";
import SotuvImg from "../../Assets/img/suv-towkin.jpg";
import PrizidentImg from "../../Assets/img/przdent-yiglishi.jpg";
import Avtobus from "../../Assets/img/avtobus.jpg";
import Tashkent from "../../Assets/img/suv-towkin.jpg";

function NewsCard() {
    return (
        <>
            <ul className="colum-news-list">
                <li className="colum-news-item">
                    <a href="#" className="colum-news-link">
                        <div className="colum-news-images">
                            <img src={SotuvImg} alt="bu yerda rasim bor" width="252"
                                height="143" />
                        </div>
                        <div className="colum-news-box-texts">
                            <h4 className="box-text-title">
                                По факту прорыва Сардобинского водохранилища
                                возбуждено уголовное дело
                            </h4>
                            <p className="box-text-subtitle">
                                После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело,
                                сообщили
                                в пресс-службе Генпрокуратуры Узбекистана.
                            </p>
                            <span className="colum-time-post">11:31 / 15.05.2020</span>
                        </div>
                    </a>

                </li>
                <li className="colum-news-item">
                    <a href="#" className="colum-news-link">
                        <div className="colum-news-images">
                            <img src={PrizidentImg} alt="bu yerda rasim bor" width="252"
                                height="143" />
                        </div>
                        <div className="colum-news-box-texts">
                            <h4 className="box-text-title">
                                Мирзиёев: «Нам следовало бы принять некоторые правила
                                карантина как часть повседневной жизни»
                            </h4>
                            <p className="box-text-subtitle">
                                Мирзиёев: «Нам следовало бы принять некоторые правила
                                карантина как часть повседневной жизни»
                            </p>
                            <span className="colum-time-post">11:31 / 15.05.2020</span>
                        </div>
                    </a>
                </li>
                <li className="colum-news-item">
                    <a href="#" className="colum-news-link">
                        <div className="colum-news-images">
                            <img src={Avtobus} alt="bu yerda rasim bor" width="252" height="143" />
                        </div>
                        <div className="colum-news-box-texts">
                            <h4 className="box-text-title">
                                В Ташкенте планируют ввести новую систему электронных проездных билетов
                            </h4>
                            <p className="box-text-subtitle">
                                Целью этих изменений является максимально возможное сокращение количества
                                других
                                маршрутов на улицах, где проходят основные маршруты.
                            </p>
                            <span className="colum-time-post">11:31 / 15.05.2020</span>
                        </div>
                    </a>
                </li>
                <li className="colum-news-item">
                    <a href="#" className="colum-news-link">
                        <div className="colum-news-images">
                            <img src={Tashkent} alt="bu yerda rasim bor" width="252"
                                height="143" />
                        </div>
                        <div className="colum-news-box-texts">
                            <h4 className="box-text-title">
                                По факту прорыва Сардобинского водохранилища
                                возбуждено уголовное дело
                            </h4>
                            <p className="box-text-subtitle">
                                После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело,
                                сообщили
                                в пресс-службе Генпрокуратуры Узбекистана.
                            </p>
                            <span className="colum-time-post">11:31 / 15.05.2020
                            </span>
                        </div>
                    </a>
                </li>
                <li className="colum-news-item">
                    <a href="#" className="colum-news-link">
                        <div className="colum-news-images">
                            <img src={PrizidentImg} alt="bu yerda rasim bor" width="252"
                                height="143" />
                        </div>
                        <div className="colum-news-box-texts">
                            <h4 className="box-text-title">
                                Мирзиёев: «Нам следовало бы принять некоторые правила карантина как часть
                                повседневной жизни»
                            </h4>
                            <p className="box-text-subtitle">
                                Президент Узбекистана заявил, что после того, как угроза коронавируса
                                исчезнет,
                                в
                                стране следовало бы принять некоторые правила периода карантина как часть
                                своей
                                повседневной жизни.
                            </p>
                            <span className="colum-time-post">11:31 / 15.05.2020</span>
                        </div>
                    </a>
                </li>
                <li className="colum-news-item">
                    <a href="#" className="colum-news-link">
                        <div className="colum-news-images">
                            <img src={Avtobus} alt="bu yerda rasim bor" width="252" height="143" />
                        </div>
                        <div className="colum-news-box-texts">
                            <h4 className="box-text-title">
                                В Ташкенте планируют ввести новую систему электронных проездных билетов
                            </h4>
                            <p className="box-text-subtitle">
                                Целью этих изменений является максимально возможное сокращение количества
                                других
                                маршрутов на улицах, где проходят основные маршруты.
                            </p>
                            <span className="colum-time-post">11:31 / 15.05.2020</span>
                        </div>
                    </a>
                </li>
                <li className="column-news-button">
                    <div className="column-news-btn">
                        <button className="column-btn-link">Больше новостей</button>
                    </div>
                </li>
            </ul>
        </>
    )
};

export default NewsCard;