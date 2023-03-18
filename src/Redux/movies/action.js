import axios from "axios"
import { GET_MOVIE_DATA } from "./actionType";

const getMovies = ({ sort, key, language }) => {
    return (dispatch) => {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=939cb94eb1470cd3b74b2ec575a26449&language=en-US&include_adult=true&include_video=false&page=1`;
        if (sort) {
            url += `&sort_by=${sort}`
        }
        if (language) {
            url += `&with_original_language=${language}`
        }
        try {
            dispatch(movieData({ loading: true }))
            axios.get(url)
                .then((res) => {
                    console.log('data Action', res.data.results);
                    return dispatch(movieData({ [key]: res.data.results, loading: false, type: 'movie' }))
                })
        } catch (error) {
            console.log('axios-error', error)
            dispatch(movieData({ error: error }));
        }

    }
}
const getSimilar = ({ id, key }) => {
    return (dispatch) => {
        let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=939cb94eb1470cd3b74b2ec575a26449&language=en-US&page=1`;
        try {
            dispatch(movieData({ loading: true }))
            axios.get(url)
                .then((res) => {
                    console.log('data Action', res.data.results);
                    return dispatch(movieData({ [key]: res.data.results, loading: false, type: 'movie' }))
                })
        } catch (error) {
            console.log('axios-error', error)
            dispatch(movieData({ error: error }));
        }
    }
}
const removeFromWishlist = async (id) => {

    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `http://localhost:4000/wishlist/${id}`,
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

}
const addToWishlist = async (body) => {

    let data = JSON.stringify(body);

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:4000/wishlist',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

}
const getWishlistData = async (id) => {

    return new Promise((resolve, reject) => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:4000/wishlist',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    });
}
const checkWishlist = (id) => {
    return new Promise((resolve, reject) => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:4000/wishlist/${id}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                resolve(true);
            })
            .catch((error) => {
                console.log('not in wishlist');
                resolve(false);
            });
    });
}
const movieData = (data) => {
    return {
        type: GET_MOVIE_DATA,
        payload: data
    }
}

export { getMovies, getSimilar, removeFromWishlist, addToWishlist, checkWishlist, getWishlistData }