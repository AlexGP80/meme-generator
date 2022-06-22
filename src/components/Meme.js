import React from "react";
import "../styles/Meme.css";
import memesData from "../memesData.js"


export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const index = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[index].url;
        setMeme(prevMeme => ({...prevMeme, randomImage: url}));
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
            <img src={meme.randomImage} alt="" className="meme-image" />
        </div>
    );
}