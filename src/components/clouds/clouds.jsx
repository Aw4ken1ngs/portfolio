import React from "react";
import styles from "./clouds.module.css";
import cloudImg from "../../img/cloud-img.png";
import cloudImg2 from "../../img/cloud2-img.png";
import cloudImg4 from "../../img/cloud4-img.png";
import cloudImg5 from "../../img/cloud5-img.png";
import cloudImg6 from "../../img/cloud6-img.png";
import cloudImg7 from "../../img/cloud7-img.png";

export function Clouds() {
    return (
        <>
            <div className={styles.animationCloud1}>
                <img src={cloudImg4} alt="image cloud" width="400" height="100"/>
            </div>
            <div className={styles.animationCloud2}>
                <img src={cloudImg5} alt="image cloud" width="400" height="100"/>
            </div>
            <div className={styles.animationCloud4}>
                <img src={cloudImg2} alt="image cloud" width="250" height="125"/>
            </div>
            <div className={styles.animationCloud5}>
                <img src={cloudImg} alt="image cloud" width="350" height="175"/>
            </div>
            <div className={styles.animationCloud6}>
                <img src={cloudImg6} alt="image cloud" width="450" height="225"/>
            </div>
            <div className={styles.animationCloud7}>
                <img src={cloudImg7} alt="image cloud" width="450" height="225"/>
            </div>
        </>
    )
}
