import React, { useState } from "react";
import styles from "./icons.module.css";
import MeImg from "../../img/me-img.png";
import CareerImg from "../../img/career-img.png";

const ICONS = [
    { id: "html", label: "HTML", description: "HTML — это основной язык разметки для веб-страниц." },
    { id: "css", label: "CSS", description: "CSS используется для стилизации веб-страниц." },
    { id: "js", label: "JavaScript", description: "JavaScript — это язык программирования для веба." },
    { id: "react", label: "React", description: "React — это библиотека для создания интерфейсов." },
    { id: "node", label: "Node.js", description: "Node.js — это среда выполнения JavaScript на сервере." },
    { id: "ts", label: "TypeScript", description: "TypeScript — это надстройка над JavaScript." },
    { id: "next", label: "Next.js", description: "Next.js — это фреймворк для React." },
    { id: "git", label: "Git", description: "Git — это система контроля версий." },
    { id: "tailwind", label: "Tailwind", description: "Tailwind — это CSS-фреймворк." },
    { id: "redux", label: "Redux", description: "Redux — это менеджер состояния приложений." },
    { id: "rest", label: "REST API", description: "REST API используется для взаимодействия между системами." },
    { id: "zustand", label: "Zustand", description: "Zustand — это легковесный менеджер состояния." },
];

const IMAGES = [
    { id: "me", src: MeImg, alt: "Image of me", description: "Me — это я и точка." },
    { id: "career", src: CareerImg, alt: "Image of my career", description: "Career — это моя карьера." },
];

export function Icons() {
    const [activePopup, setActivePopup] = useState(null);

    const handleIconClick = (id) => setActivePopup(id);
    const handleClosePopup = () => setActivePopup(null);

    return (
        <div>
            {ICONS.map((icon) => (
                <div
                    key={icon.id}
                    className={`${styles.animationContainer} ${styles[`icons${icon.id.charAt(0).toUpperCase() + icon.id.slice(1)}`]}`}
                    onClick={() => handleIconClick(icon.id)}
                >
                    <h2 className={styles[`text${icon.id.charAt(0).toUpperCase() + icon.id.slice(1)}`]}>{icon.label}</h2>
                </div>
            ))}

            {IMAGES.map((image) => (
                <div
                    key={image.id}
                    className={styles[`icons${image.id.charAt(0).toUpperCase() + image.id.slice(1)}`]}
                    onClick={() => handleIconClick(image.id)}
                >
                    <img src={image.src} alt={image.alt} width="100" height="100" />
                </div>
            ))}

            {activePopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>
                            {ICONS.find((icon) => icon.id === activePopup)?.label ||
                                IMAGES.find((image) => image.id === activePopup)?.alt}
                        </h1>
                        <p>
                            {ICONS.find((icon) => icon.id === activePopup)?.description ||
                                IMAGES.find((image) => image.id === activePopup)?.description}
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
