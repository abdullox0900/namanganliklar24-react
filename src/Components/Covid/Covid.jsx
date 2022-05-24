import React from "react";
import "../Covid/Covid.scss";

function Covid() {
    return (
        <>
            <section className="covid-box">
                <div className="container">
                    <div className="covid-box-banner">
                        <ul className="covid-list">
                            <li className="covid-item">
                                <h3 className="covid-text-title">Коронавирус COVID-19 <br /> в Узбекистане</h3>
                            </li>
                            <li className="covid-item covid-item-red">
                                <span className="hetis-line"></span>
                                <div className="covid-item-box">
                                    <h3 className="covid-title covid-title-red">Инфицированы</h3>
                                    <p className="covid-subtitle">2753</p>
                                </div>
                            </li>
                            <li className="covid-item covid-item-green">
                                <div className="covid-item-box">
                                    <h3 className="covid-title">Выздоровели</h3>
                                    <p className="covid-subtitle">2245</p>
                                </div>
                            </li>
                            <li className="covid-item covid-item-black">
                                <div className="covid-item-box">
                                    <h3 className="covid-title">Умерли</h3>
                                    <p className="covid-subtitle">12</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Covid;