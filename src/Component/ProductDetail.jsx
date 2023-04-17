import React from "react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import Styles from "../CSS/Moviedtails.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Flex, Text, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { checkWishlist, getMovies, getSimilar } from "../Redux/movies/action";
import CardCarousel from "./Carousel/CardCarousel";

function ProductDetail(props) {
  const parms = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [plan, setPlan] = useState("base");
  const updated = useSelector((state) => state.loginReducer.updated);
  console.log("params", parms);
  let [key, setkey] = useState({
    backdrop_path: "",
    name: "",
    seasons: [],
    genres: [],
    spoken_languages: [],
    overview: "",
  });
  let [play, setplay] = useState(true);
  function getID() {
    let url = `https://api.themoviedb.org/3/${parms.type}/${parms.id}?api_key=24ca5a64d4833b96467da5ed3580a957&language=en-US`;
    fetch(url)
      .then((res) => res.json())
      .then((jsres) => {
        setkey(jsres);
      });
  }
  const isWishlisted = async () => {
    let exist = await checkWishlist(key.id);
    if (exist) {
      setplay(false);
    }
    return () => {};
  };
  useEffect(() => {
    isWishlisted();
  }, [key]);

  useEffect(() => {
    getID();
    window.scrollTo(0, 0);
  }, [parms.id]);

  useEffect(() => {
    const sub = JSON.parse(localStorage.getItem("subscription")) || [];
    const user = JSON.parse(localStorage.getItem("userdetails")) || [];
    const newPlan = sub?.package?.plan || user?.package?.plan || "base";
    console.log("plan to be", newPlan);
    setPlan(newPlan);
    return () => {};
  }, [updated]);

  const similar = useSelector((state) => state.movieReducer.similar);
  const lastYear = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );
  useEffect(() => {
    dispatch(getSimilar({ id: parms.id, key: "similar" }));
    return () => {};
  }, [parms.id]);
  return (
    <Flex w={"100%"} direction="column">
      <div className={Styles.Container}>
        <div className={Styles.Imagetitle}>
          {Date.parse(key.release_date) > lastYear ? (
            <h4 className={Styles.SubscriberColor}>SUBSCRIBER</h4>
          ) : null}
          <Text fontSize="28px" fontWeight="500">
            {key.title || key.original_title}
          </Text>
          {/* <h4>{ key.seasons[1].season_number + "  Season " + key.seasons[1].episode_count + " Episodes"  + " • " + key.genres[2].name + " • " + key.spoken_languages.english_name}  </h4> */}
          {key.seasons?.length > 0 && (
            <h4>
              {key.seasons[1]?.season_number +
                "  Season " +
                key.seasons[1]?.episode_count +
                " Episodes" +
                " • " +
                key.genres[0]?.name +
                " • " +
                key.spoken_languages[0]?.english_name}{" "}
            </h4>
          )}
          <Text fontSize="22px" color="#ffffffcc" noOfLines="4">
            {key.overview}
          </Text>
          <div className={Styles.Control}>
            <div>
              <button
                className={Styles.btn}
                onClick={() => {
                  navigate(`/play/${parms.type}/${parms.id}`);
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-play-fill"
                  viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                &nbsp;&nbsp;
                <span style={{ fontSize: "20px", textAlign: "center" }}>
                  Watch Trailer
                </span>
              </button>
            </div>
            <div>
              <button
                className={Styles.btn}
                onClick={() => {
                  if (
                    plan == "base" &&
                    Date.parse(key.release_date) > lastYear
                  ) {
                    navigate("/login");
                  } else navigate(`/play/${parms.type}/${parms.id}`);
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-play-fill"
                  viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                &nbsp;&nbsp;
                <span style={{ fontSize: "20px", textAlign: "center" }}>
                  Watch Movie
                </span>
              </button>
            </div>

            <div className={Styles.Controldiv}>
              <button
                className={Styles.btn}
                onClick={() => {
                  setplay((prev) => !prev);
                }}>
                {play ? <AddIcon /> : <CheckIcon />}
                <div style={{ marginTop: "10px" }}>WATCHLIST</div>
              </button>
              <Flex
                className={Styles.btn}
                direction="column"
                alignItems="center"
                display={"flex"}
                justifyContent="center"
                mb="0"
                pb="0"
                h="100%">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-share-fill"
                  viewBox="0 0 16 16">
                  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                </svg>
                <div style={{ marginTop: "15px" }}>Share</div>
              </Flex>
            </div>
          </div>

          <div className={Styles.lang}>
            <div className={Styles.wrapper}>
              <button className={Styles.button}>English</button>
            </div>
            <div>
              <button className={Styles.button}>தமிழ்</button>
            </div>
            <div>
              <button className={Styles.button}>हिंदी</button>
            </div>
            <div>
              <button className={Styles.button}>తెలుగు</button>
            </div>
            <div>
              <button className={Styles.button}>ಕನ್ನಡ</button>
            </div>
          </div>
        </div>
        <div className={Styles.gradient}></div>
        <div className={Styles.BackgroundImage}>
          <img
            className={Styles.img}
            src={`https://image.tmdb.org/t/p/w1280${key.backdrop_path}`}
            alt=""
          />
        </div>
      </div>
      <div style={{ width: "97%", margin: "0 auto" }}>
        <CardCarousel data={similar} type={"movie"} title={"More Like This"} />
      </div>
    </Flex>
  );
}

export default ProductDetail;
