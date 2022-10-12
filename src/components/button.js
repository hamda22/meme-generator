import{ React,useState }from 'react'
import memeData from './memeData'

export default function Button() {
  const [MemeImage,SetMemeImage]=useState("hello");
function GetImage(){
    const  memes = memeData.data.memes
    const randomNum = Math.floor(Math.random()*memes.length)
    const url = memes[randomNum].url
    SetMemeImage(url)
 
    

}

 return (
    <div>
      <button type="submit" className='button--btn'onClick={GetImage}>Get a new meme image 🖼️</button>
     <div><img src={MemeImage} alt=""  className='img--meme'/></div>
      </div>
  )

 }