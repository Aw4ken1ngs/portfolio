import React from "react";
import "./styles.css";
import {PersonImage} from "./components/person-image/person-image";
import {Clouds} from "./components/clouds/clouds";
import {Icons} from "./components/icons/icons";

export default function App() {
        return (
            <div className="App">
                    <h1>Сайт портфолио</h1>
                <PersonImage/>
                <Clouds/>
                    <Icons/>
            </div>
        );
}
