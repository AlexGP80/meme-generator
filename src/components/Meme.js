import React from "react";
import "../styles/Meme.css";


export default function Meme() {
    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
    

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(json => setAllMemes(json.data.memes));
    }, []);

    function getMemeImage() {
        const index = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[index].url;
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
                <img src={meme.randomImage} className="meme--image" alt=""/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    );
}