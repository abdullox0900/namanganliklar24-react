import React from "react";
import "../Main/Main.scss";
import Covid from "../Covid/Covid";
import News from "../News/News";
import Latest from "../LatestNews/Latest";
import Banner from "../Banner/Banner";

function Main() {
    return(
        <>
            <Covid/>
            <News/>
            <Latest/>
            <Banner/>
        </>
    )
}

export default Main;