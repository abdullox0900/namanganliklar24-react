import React from "react";
import "../LatestNews/Latest.scss";
import NewsCard from "../NewsCard/NewsCard";
import ColumNews from "../ColumNewsRight/ColumNews";

function Latest() {
    return (
        <>
            <section class="Latest-news-box">
                <div class="container">
                    <div class="column-news">
                        <h2 class="column-news-title">
                            Последние новости
                        </h2>
                        <div class="column-header-box">
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