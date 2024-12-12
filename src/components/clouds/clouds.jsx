import React from "react";
import styles from "./clouds.module.css";
import cloudImg from "../../img/cloud-img.png";
import cloudImg2 from "../../img/cloud2-img.png";
import cloudImg4 from "../../img/cloud4-img.png";
import cloudImg5 from "../../img/cloud5-img.png";
import cloudImg6 from "../../img/cloud6-img.png";
import cloudImg7 from "../../img/cloud7-img.png";

const CLOUDS = [
    { id: 1, src: cloudImg4, className: styles.animationCloud1, width: 400, height: 100},
    { id: 2, src: cloudImg5, className: styles.animationCloud2, width: 400, height: 100},
    { id: 3, src: cloudImg2, className: styles.animationCloud4, width: 250, height: 125},
    { id: 4, src: cloudImg, className: styles.animationCloud5, width: 350, height: 175},
    { id: 5, src: cloudImg6, className: styles.animationCloud6, width: 450, height: 225},
    { id: 6, src: cloudImg7, className: styles.animationCloud7, width: 450, height: 225},
];

export function Clouds() {
    return (
        <>
            {CLOUDS.map((cloud) => (
                <div key={cloud.id} className={cloud.className}>
                    <img src={cloud.src} alt="image cloud" width={cloud.width} height={cloud.height} />
                </div>
            ))}
        </>
    );
}
