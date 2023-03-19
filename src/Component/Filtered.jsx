import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../CSS/genre.module.css';

export default function Filtered() {
  const { id } = useParams();
  const array=[10749,18,36]
  
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const API_KEY = '939cb94eb1470cd3b74b2ec575a26449';

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`);
      const data = await response.json();
      setData(data.results);
      console.log("ele",data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{backgroundColor: "#131927"}}>
      <h2 style={{marginLeft:"108px", fontSize:"20px", fontFamily:"sans-serif", color: "white",marginTop: "50px",padding: "50px 0 0"}}>Romance</h2>
      <div className="div-box" style={{ display: "flex" , justifyContent: "center", flexWrap: "wrap",  }}>
        {data.map((elm) => (
          <div className={styles.box} key={elm.id} style={{  margin: "5px", marginTop: "20px" , width: "220px", position: "relative" }}>
            <img src={`https://image.tmdb.org/t/p/w500/${elm.poster_path}`} alt={elm.genre} style={{ maxWidth: "100%", height: "auto", borderRadius: '5px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
