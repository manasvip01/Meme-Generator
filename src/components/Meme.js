//import logo from './logo.svg';
import '../App.css';
import React from "react"

function Meme() {
const[allValues,allChangedValues]=React.useState({
    topText:"",
    bottomText:"",
    randomIMage:"https://i.imgflip.com/30b1gx.jpg"
})


function handleChange(event){
    const{name,value}=event.target
    allChangedValues(prevMeme=>({
        ...prevMeme,
        [name]:value
    }))
}

const [allMemesImages,allMemesChanged]=React.useState([])

React.useEffect(()=>{
    // fetch("https://api.imgflip.com/get_memes")
    // .then(res=> res.json())
    // .then(data=>allMemesChanged(data.data.memes))
    async function getMemes(){
        const res=await fetch("https://api.imgflip.com/get_memes")
        const data=await res.json()
        allMemesChanged(data.data.memes)
    }
    getMemes()
    // return()=>{
    //If we need a closing call
    // }
},[])

    function Click(){
        const randomNumber=Math.floor(Math.random()*allMemesImages.length)
        const url=allMemesImages[randomNumber].url
 //       console.log(url)
        allChangedValues(prevMeme=>({
            ...prevMeme,
            randomIMage:url
    }))
    }
  return (
    <div className="form">
    <form action="" >
        <input type="text" placeholder='Top Text' id="top" name="topText" onChange={handleChange} value={allValues.topText}/>
        <input type="text" name="" id="bottom" placeholder='Bottom Text' name="bottomText" onChange={handleChange} value={allValues.bottomText}/>
    </form>
    <button type="submit" id="submit" onClick={Click}>Get a new meme image</button>
    <div className="position">
    <div id="random"><img src={allValues.randomIMage} alt="" className='image'/></div>
    <h2 className='meme--text top'>{allValues.topText}</h2>
    <h2 className='meme--text bottom'>{allValues.bottomText}</h2>
    </div>
      </div>
  );
}

export default Meme;
