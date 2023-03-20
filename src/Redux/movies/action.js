import axios from "axios";
import { GET_MOVIE_DATA } from "./actionType";

const getMovies = ({ sort, key, language }) => {
  return (dispatch) => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=939cb94eb1470cd3b74b2ec575a26449&language=en-US&include_adult=false&include_video=false&page=1`;
    if (sort) {
      url += `&sort_by=${sort}`;
    }
    if (language) {
      url += `&with_original_language=${language}`;
    }
    try {
      dispatch(movieData({ loading: true }));
      axios.get(url).then((res) => {
        console.log("data Action", res.data.results);
        return dispatch(
          movieData({ [key]: res.data.results, loading: false, type: "movie" })
        );
      });
    } catch (error) {
      console.log("axios-error", error);
      dispatch(movieData({ error: error }));
    }
  };
};
const getSimilar = ({ id, key }) => {
  return (dispatch) => {
    let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=939cb94eb1470cd3b74b2ec575a26449&language=en-US&page=1`;
    try {
      dispatch(movieData({ loading: true }));
      axios.get(url).then((res) => {
        console.log("data Action", res.data.results);
        return dispatch(
          movieData({ [key]: res.data.results, loading: false, type: "movie" })
        );
      });
    } catch (error) {
      console.log("axios-error", error);
      dispatch(movieData({ error: error }));
    }
  };
};
const searchMovie = ({ query, key }) => {
  return (dispatch) => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=939cb94eb1470cd3b74b2ec575a26449&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      // dispatch(movieData({ loading: false }))
      axios.get(url).then((res) => {
        console.log("data Action", res.data.results);
        return dispatch(
          movieData({ [key]: res.data.results, loading: false, type: "movie" })
        );
      });
    } catch (error) {
      console.log("axios-error", error);
      dispatch(movieData({ error: error }));
    }
  };
};
const removeFromWishlist = async (id) => {
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_BASE_URL}/wishlist/${id}`,
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
const addToWishlist = async (body) => {
  let data = JSON.stringify(body);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_BASE_URL}/wishlist`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
const addToContinue = async (id) => {
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=24ca5a64d4833b96467da5ed3580a957&language=en-US`;
  let res = await axios.get(url);

  let data = JSON.stringify(res.data);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_BASE_URL}/continue`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
const getWishlistData = async (id) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/wishlist`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
const getContinueWatching = async (id) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/continue`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        resolve([response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
const checkWishlist = (id) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/wishlist?id=${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        if (response.data.length > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((error) => {
        resolve(false);
      });
  });
};
const movieData = (data) => {
  return {
    type: GET_MOVIE_DATA,
    payload: data,
  };
};

export {
  getMovies,
  getSimilar,
  removeFromWishlist,
  addToWishlist,
  checkWishlist,
  getWishlistData,
  searchMovie,
  getContinueWatching,
  addToContinue,
};
