import React from "react";
import "../styles/Meme.css";
import memesData from "../memesData.js"


export default function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const index = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[index].url;
        console.log(url);
    }

    return (
        <div className="meme-form-container">
            <div className="meme-form">
                <div className="meme-form-inputs">
                    <input type="text" placeholder="Top text" className="upper-text-input"/>
                    <input type="text" placeholder="Bottom text" className="bottom-text-input"/>
                </div>
                <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <img src="../images/memeimg.png" alt="Meme" className="meme-image" />
        </div>
    );
}