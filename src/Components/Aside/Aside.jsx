import React from "react";
import "../Aside/Aside.scss";
import BannerImg from "../../Assets/img/nrg-banner.jpg"

function AsideBanner() {
    return (
        <>
            <aside>
                <a href="#">
                    <img src={ BannerImg } alt="bu reklama banneri" className="header-banner" width="1200" height="99" />
                </a>
            </aside>
        </>
    )
}

export default AsideBanner;