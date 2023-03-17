import axios from "axios"
import { GET_MOVIE_DATA } from "./actionType";

const getMovies = ({ sort, key }) => {
    return (dispatch) => {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=939cb94eb1470cd3b74b2ec575a26449&language=en-US&include_adult=false&include_video=false&page=1&sort_by=popularity.desc`;
        if (sort) {
            url += `&sort_by=${sort}`
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
const movieData = (data) => {
    return {
        type: GET_MOVIE_DATA,
        payload: data
    }
}

export { getMovies, getSimilar }