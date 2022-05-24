import React from "react";
import "../Main/Main.scss";
import Covid from "../Covid/Covid";
import News from "../News/News";
import Latest from "../LatestNews/Latest";

function Main() {
    return(
        <>
            <Covid/>
            <News/>
            <Latest/>
        </>
    )
}

export default Main;