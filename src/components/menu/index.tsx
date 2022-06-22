import React from "react";
import "./menu.scss";
import logo from "../../assents/logo.png"
import imgYellow from "../../assents/yellow.png"
import { Link } from 'react-router-dom';

const menuItems = [
    {
        name: "Home",
        link: ""
    },
    {
        name: "Como fazer",
        link: "/howToMake"
    }
]

export default function Menu(): JSX.Element {

    return (
        <div className="menu">
            <img className="image-menu" src={logo} />
            <img className="image-yellow" src={imgYellow} />
            <ul className="navegation-menu">
                {menuItems.map((item, i, array) => <React.Fragment key={i}>
                    {i === 0 ? null : <li style={{ listStyle: 'none' }}>/</li>}
                    <li className="navegation-item"><Link className="navegation-item-link" to={item.link}>
                        {item.name}
                    </Link></li></React.Fragment>)}
            </ul>
        </div>
    )
}