import React from "react";
import "./menu.scss";
import logo from "../../assents/logo.png"
import imgYellow from "../../assents/yellow.png"



export default function Menu(): JSX.Element {
    return (
        <div className="menu">
            <img className="image-menu" src={logo} />
            <img className="image-yellow" src={imgYellow} />
            <ul className="navegation-menu">
                <li className="navegation-item">Como fazer</li>
                <li style={{ listStyle: 'none' }}>/</li>
                <li className="navegation-item">Ofertas</li>
                <li style={{ listStyle: 'none' }} >/</li>
                <li className="navegation-item">Depoimentos</li>
                <li style={{ listStyle: 'none' }} >/</li>
                <li className="navegation-item">Videos</li>
                <li style={{ listStyle: 'none' }} >/</li>
                <li className="navegation-item">Meu carrinho</li>
            </ul>
        </div>
    )
}