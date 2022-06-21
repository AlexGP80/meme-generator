import React from "react";
import "../styles/Header.css";

export default function Header() {
    return (
        <nav className="header">
            <img src="../images/troll-face.png" alt="" className="logo-image" />
            <h1 className="logo-text">Meme Generator</h1>
            <p className="header-course">React Course - Project 3</p>
        </nav>
    );
}