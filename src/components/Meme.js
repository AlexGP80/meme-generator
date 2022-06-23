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

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    return (
        <div className="meme-form-container">
            <div className="meme-form">
                <div className="meme-form-inputs">
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        placeholder="Top text" 
                        className="upper-text-input"
                        value={meme.topText}
                        name="topText"
                    />
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        placeholder="Bottom text" 
                        className="bottom-text-input"
                        value={meme.bottomText}
                        name="bottomText"
                    />
                </div>
                <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    );
}