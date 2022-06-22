import React from "react";
import "../styles/Meme.css";
import memesData from "../memesData.js"


export default function Meme() {

    function handleClick() {
        const index = Math.floor(Math.random() * 101);
        console.log(memesData.data.memes[index].url);
    }

    return (
        <div className="meme-form-container">
            <div className="meme-form">
                <div className="meme-form-inputs">
                    <input type="text" placeholder="Top text" className="upper-text-input"/>
                    <input type="text" placeholder="Bottom text" className="bottom-text-input"/>
                </div>
                <button onClick={handleClick}>Get a new meme image 🖼️</button>
            </div>
            <img src="../images/memeimg.png" alt="Meme" className="meme-image" />
        </div>
    );
}