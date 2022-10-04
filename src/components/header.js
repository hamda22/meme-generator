import React from "react"
import image from "../images/a.png"
export default function Header() {
    return (
        <header className="img--header">
           
            <img src={image} alt="" className="img--troll"/>
            <h2 className="h2--header">Meme-Generator</h2>
            
            <h4 className="h4--header">React Course - Project 3</h4>
        </header>
    )
}