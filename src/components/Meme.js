import React from "react";
import "../styles/Meme.css";

export default function Meme() {
    return (
        <div className="meme-form-container">
            <form className="meme-form">
                <div className="meme-form-inputs">
                    <input type="text" placeholder="Upper text" className="upper-text-input"/>
                    <input type="text" placeholder="Bottom text" className="bottom-text-input"/>
                </div>
                <button>Get a new meme image 🖼️</button>
            </form>
            <img src="../images/memeimg.png" alt="Meme" className="meme-image" />
        </div>
    );
}