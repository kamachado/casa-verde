import React from "react";
import "./menu.scss";
import logo from "../../assents/logo.png"
import imgYellow from "../../assents/yellow.png"

const menuItems = [{
    name: "Como fazer",
    link: ""
}, {
    name: "Ofertas",
    link: ""
}, {
    name: "Depoimentos",
    link: ""
}, {
    name: "Videos",
    link: ""
}, {
    name: "Meu carrinho",
    link: ""
}]

export default function Menu(): JSX.Element {

    return (
        <div className="menu">
            <img className="image-menu" src={logo} />
            <img className="image-yellow" src={imgYellow} />
            <ul className="navegation-menu">
                {menuItems.map((item, i, array) => <React.Fragment key={i}>
                    {i === 0 ? null : <li style={{ listStyle: 'none' }}>/</li>}
                    <li className="navegation-item">{item.name}</li>
                </React.Fragment>)}
            </ul>
        </div>
    )
}