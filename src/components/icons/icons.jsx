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
            {/* Иконки технологий */}
            {ICONS.map((icon) => (
                <div
                    key={icon.id}
                    className={`${styles.animationContainer} ${styles[`icons${icon.id.charAt(0).toUpperCase() + icon.id.slice(1)}`]}`}
                    onClick={() => handleIconClick(icon.id)}
                >
                    <h2 className={styles[`text${icon.id.charAt(0).toUpperCase() + icon.id.slice(1)}`]}>{icon.label}</h2>
                </div>
            ))}

             Изображения
            {IMAGES.map((image) => (
                <div key={image.id} className={styles.animationContainer} onClick={() => handleIconClick(image.id)}>
                    <img className={styles.animationImg} src={image.src} alt={image.alt} width="100" height="100" />
                </div>
            ))}


            {activePopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>
                            Опыт работы с {ICONS.find((icon) => icon.id === activePopup)?.label ||
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



{/*import React, { useState } from "react";
import styles from "./icons.module.css";
import MeImg from "../../img/me-img.png";
import CareerImg from "../../img/career-img.png";

export function Icons() {
    const [isPopupVisible, setIsPopupVisible] = useState(false); // Управление видимостью поп-апа

    const handleCircleClick = () => {
        setIsPopupVisible(true); // Показываем поп-ап
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false); // Закрываем поп-ап
    };

    return (
        <>
            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <div
                        className={styles.iconsHtml}
                        onClick={handleCircleClick}
                    >
                        <h2 className={styles.textHtml}>HTML</h2>
                    </div>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с HTML</h1>
                        <p>
                            HTML (HyperText Markup Language) — это основной язык
                            разметки для создания веб-страниц и приложений.
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <div
                        className={styles.iconsCss}
                        onClick={handleCircleClick}
                    >
                        <h2 className={styles.textCss}>CSS</h2>
                    </div>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с CSS</h1>
                        <p>
                            Css - это цсс и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <div
                        className={styles.iconsJs}
                        onClick={handleCircleClick}
                    >
                        <h2 className={styles.textJs}>JavaScript</h2>
                    </div>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с JavaScript</h1>
                        <p>
                            JavaScript - это JavaScript и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <div
                        className={styles.iconsReact}
                        onClick={handleCircleClick}
                    >
                        <h2 className={styles.textReact}>React.js</h2>
                    </div>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с React</h1>
                        <p>
                            React - это React и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <div
                        className={styles.iconsNode}
                        onClick={handleCircleClick}
                    >
                        <h2 className={styles.textNode}>Node.js</h2>
                    </div>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с Node</h1>
                        <p>
                            Node - это Node и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <div
                        className={styles.iconsTs}
                        onClick={handleCircleClick}
                    >
                        <h2 className={styles.textTs}>TypeScript</h2>
                    </div>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с TypeScript</h1>
                        <p>
                            TypeScript - это TypeScript и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <div
                        className={styles.iconsNext}
                        onClick={handleCircleClick}
                    >
                        <h2 className={styles.textNext}>Next</h2>
                    </div>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с Next</h1>
                        <p>
                            Next - это Next и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <div
                        className={styles.iconsGit}
                        onClick={handleCircleClick}
                    >
                        <h2 className={styles.textGit}>Git</h2>
                    </div>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с Git</h1>
                        <p>
                            Git - это Git и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <div
                        className={styles.iconsTailwind}
                        onClick={handleCircleClick}
                    >
                        <h2 className={styles.textTailwind}>Tailwind</h2>
                    </div>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с Tailwind</h1>
                        <p>
                            Tailwind - это Tailwind и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}

            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <div
                        className={styles.iconsRedux}
                        onClick={handleCircleClick}
                    >
                        <h2 className={styles.textRedux}>Redux</h2>
                    </div>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с Redux</h1>
                        <p>
                            Redux - это Redux и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <div
                        className={styles.iconsRest}
                        onClick={handleCircleClick}
                    >
                        <h2 className={styles.textRest}>Rest Api</h2>
                    </div>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с Rest</h1>
                        <p>
                            Rest - это Rest и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <div
                        className={styles.iconsZustand}
                        onClick={handleCircleClick}
                    >
                        <h2 className={styles.textZustand}>Zustand</h2>
                    </div>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с Zustand</h1>
                        <p>
                            Zustand - это Zustand и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}

            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                        <img onClick={handleCircleClick} src={MeImg} alt="image of me" width="100" height="100"/>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с Me</h1>
                        <p>
                            me - это me и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            {!isPopupVisible && (
                <div className={styles.animationContainer}>
                    <img onClick={handleCircleClick} src={CareerImg} alt="image my career" width="100" height="100"/>
                </div>
            )}
            {isPopupVisible && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h1>Опыт работы с career</h1>
                        <p>
                            career - это career и точка .
                        </p>
                        <button onClick={handleClosePopup} className={styles.closeBtn}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
*/}