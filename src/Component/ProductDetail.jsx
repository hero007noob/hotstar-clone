import React from 'react';
import {  AddIcon,CheckIcon } from '@chakra-ui/icons'
import { useState,useEffect } from 'react';
import Styles from "../CSS/Moviedtails.module.css"

function ProductDetail(props) {
    let [ key, setkey] = useState({ 
        backdrop_path: '',
    name: '',
    seasons: [],
    genres: [],
    spoken_languages: [],
    overview: ''})
    let [play, setplay] = useState(false)
    // let img = data.backdrop_path ? data.backdrop_path : data.poster_path
    let url = `https://api.themoviedb.org/3/tv/100088?api_key=24ca5a64d4833b96467da5ed3580a957&language=en-US`
    
    function getID() {
        fetch(url)
            .then((res) => res.json())
            .then((jsres) => {
                setkey(jsres)
            })
            
    }
    
    useEffect(() => {
        getID()
        // console.log("data",key);
    }, [])
    useEffect(() => {
        // getID()
        console.log("data",key);
    }, [key])
    return (
        <div className={Styles.Container}>
            <div className={Styles.BackgroundImage}>
                <img className={Styles.img} src={`https://image.tmdb.org/t/p/w1280${key.backdrop_path}`} alt="" />
            </div>
            <div className={Styles.Imagetitle}>
                <h4 className={Styles.SubscriberColor}>SUBSCRIBER</h4>
                <h2>{key.name}</h2>
                {/* <h4>{ key.seasons[1].season_number + "  Season " + key.seasons[1].episode_count + " Episodes"  + " • " + key.genres[2].name + " • " + key.spoken_languages.english_name}  </h4> */}
                {key.seasons?.length>0&&<h4>{ key.seasons[1]?.season_number + "  Season " + key.seasons[1]?.episode_count + " Episodes"  + " • " + key.genres[0]?.name + " • " + key.spoken_languages[0]?.english_name}  </h4>}
                <h5>{key.overview}</h5>
                <div className={Styles.Control}>
                    <div>
                        <button  className={Styles.btn} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>&nbsp;&nbsp;<span style={{fontSize:"20px",textAlign:"center"}}>Watch Movie</span></button>
                    </div>

                    <div className={Styles.Controldiv}>
                        
                        <button className={Styles.btn} onClick={()=>{setplay(prev=>(!prev))}} >{play?<AddIcon boxSize={23} mr="10px"/>:<CheckIcon/>}<div style={{marginTop:"12px"}} >
WATCHLIST</div></button>
                        <button className={Styles.btn}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
</svg><div style={{marginTop:"15px"}}>Share</div></button>
                    </div>
                </div>

                <div className={Styles.lang}>
                    <div className={Styles.wrapper}>
                        <button className={Styles.button}>English</button>
                    </div>
                    <div><button className={Styles.button}>தமிழ்</button></div>
                    <div><button className={Styles.button}>हिंदी</button></div>
                    <div><button className={Styles.button}>తెలుగు</button></div>
                    <div><button className={Styles.button}>ಕನ್ನಡ</button></div>
                </div>



            </div>

        </div>
    );
}

export default ProductDetail;