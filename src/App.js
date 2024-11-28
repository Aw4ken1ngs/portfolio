import React, { useState } from "react";
import "./styles.css";
import {PersonImage} from "./components/person-image/person-image";
import {Clouds} from "./components/clouds/clouds";
import {Icons} from "./components/icons/icons";

export default function App() {
        const [hoveredIcon, setHoveredIcon] = useState(null);
        const descriptions = {
                6: " Описание для иконки 6Описание для иконки 6Описание для иконки 6Описание для иконки 6Описание для иконки 6Описание для иконки 6Описание для иконки 6Описание для иконки 6Описание для иконки 6Описание для иконки 6Описание для иконки 6",
                7: "Описание для иконки 7",
                8: "Описание для иконки 8",
                9: "Описание для иконки 9",
                10: "Описание для иконки 10",
                11: "Описание для иконки 11",
                12: "Описание для иконки 12",
                13: "Описание для иконки 13",
                14: "Описание для иконки 14",
        };

        return (
            <div className="App">
                    <h1>Сайт портфолио</h1>
                <PersonImage/>
                <Clouds/>
                    <Icons/>
                    {/*{Array.from({ length: 9 }, (_, index) => {*/}
                    {/*        const id = index + 6;*/}
                    {/*        return (*/}
                    {/*            <div*/}
                    {/*                key={id}*/}
                    {/*                className={`box${id} animationIcon`}*/}
                    {/*                onMouseEnter={() => setHoveredIcon(id)}*/}
                    {/*                onMouseLeave={() => setHoveredIcon(null)}*/}
                    {/*            >*/}
                    {/*                    {hoveredIcon === id && (*/}
                    {/*                        <div className="description">{descriptions[id]}</div>*/}
                    {/*                    )}*/}
                    {/*            </div>*/}
                    {/*        );*/}
                    {/*})}*/}
            </div>
        );
}
