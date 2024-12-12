import React, { useState } from "react";
import styles from "./icons.module.css";
import MeImg from "../../img/me-img.png";
import CareerImg from "../../img/career-img.png";

const ICONS = [
    { id: "html", label: "HTML", description: "Я полностью владею HTML, включая использование семантической разметки для улучшения структуры и доступности страниц. Умею работать с формами, мультимедиа, атрибутами и понимаю их влияние на SEO и UX. Также знаком с прогрессивным улучшением и адаптивным дизайном." },
    { id: "css", label: "CSS", description: "Уверенно использую CSS для стилизации интерфейсов. Владею Flexbox, Grid и медиа-запросами для создания адаптивных и отзывчивых дизайнов. Знаю подходы BEM и CSS-модули. Также работал с анимациями (keyframes, transitions) и применял CSS-переменные для улучшения масштабируемости." },
    { id: "js", label: "JavaScript", description: "Обладаю глубоким пониманием JavaScript. Знаю основы ES6+: модули, стрелочные функции, деструктуризацию. Использую асинхронные функции, промисы и обработку событий. Работал с DOM-манипуляцией и внедрял функциональные и объектно-ориентированные подходы." },
    { id: "react", label: "React", description: "Владею созданием компонентов React и управлением состоянием с помощью хуков (useState, useEffect, useContext). Понимаю концепции пропов, поднятия состояния и контекста. Использовал React Router для маршрутизации." },
    { id: "node", label: "Node.js", description: "Работал с Node.js для создания серверной логики. Использовал Express.js для настройки роутинга и взаимодействия с базами данных. Понимаю основы работы с потоками, модулями и middleware." },
    { id: "ts", label: "TypeScript", description: "Использую TypeScript для обеспечения типизации и повышения надёжности кода. Знаю работу с интерфейсами, дженериками и строгой типизацией React-компонентов." },
    { id: "next", label: "Next.js", description: "Разрабатывал проекты с использованием Next.js. Знаю основы серверного рендеринга (SSR), статической генерации (SSG) и маршрутизации. Использовал API-роуты и настраивал оптимизацию страниц для SEO." },
    { id: "git", label: "Git", description: "Использую Git для управления версиями кода. Владею основами работы с ветками (branching), объединением (merge) и разрешением конфликтов. Понимаю Git Flow и использую его в проектах."},
    { id: "tailwind", label: "Tailwind", description: "Использую Tailwind CSS для ускорения разработки. Умею настраивать тему, управлять кастомными классами и создавать адаптивные интерфейсы через utility-first подход." },
    { id: "redux", label: "Redux", description: "Использовал Redux для управления глобальным состоянием приложений. Настраивал сторы, редьюсеры и actions. Понимаю, как оптимизировать производительность через мемоизацию и Redux Toolkit." },
    { id: "rest", label: "REST API", description: "Имею опыт взаимодействия с REST API: отправка запросов (GET, POST, PUT, DELETE) с помощью fetch и axios. Умею обрабатывать ошибки, добавлять авторизацию и оптимизировать запросы." },
    { id: "zustand", label: "Zustand", description: "Работал с Zustand для управления состоянием в React-приложениях. Использую его для создания легковесных и масштабируемых решений. Настраивал сторы для хранения пользовательских данных и управления взаимодействиями между компонентами." },
];

const IMAGES = [
    { id: "me", src: MeImg, alt: "Image of me", description: "Я — увлечённый и ответственный фронтенд-разработчик, стремящийся создавать удобные и производительные интерфейсы. Имею опыт работы с современными технологиями и инструментами, использую лучший подход к решению задач и поддерживаю высокие стандарты качества кода.\n" +
            "\n" +
            "Кроме профессиональных навыков, я семейный человек, который ценит баланс между работой и личной жизнью. Веду активный образ жизни: занимаюсь спортом, увлекаюсь походами и придерживаюсь здорового образа жизни. У меня трое детей, что научило меня эффективно планировать время и быть максимально продуктивным." },
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
                            {ICONS.find((icon) => icon.id === activePopup)?.description.split('. ').map((sentence, index) => (
                                    <span key={index} className={styles.paragraph}>{sentence.trim() + (sentence.endsWith('.') ? '' : '.')}</span>
                                )) ||
                                IMAGES.find((image) => image.id === activePopup)?.description.split('. ').map((sentence, index) => (
                                    <span key={index} className={styles.paragraph}>{sentence.trim() + (sentence.endsWith('.') ? '' : '.')}</span>
                                ))}
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
