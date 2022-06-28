import React from "react";
import "../LatestNews/Latest.scss";
import NewsCard from "../NewsCard/NewsCard";
import ColumNews from "../ColumNewsRight/ColumNews";

function Latest() {
    return (
        <>
            <section className="Latest-news-box">
                <div className="container">
                    <div className="column-news">
                        <h2 className="column-news-title">
                            Последние новости
                        </h2>
                        <div className="column-header-box">
                            <NewsCard/>
                            <ColumNews/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Latest;