import React from "react";
import personImg from "../../img/person-img.png";
import styles from "./person-images.module.css";

export function PersonImage() {
    return (
        <div className={styles.container}>
            <img src={personImg} alt="Picture Ivan Panov" width="500" height="500"/>
        </div>
    )
}