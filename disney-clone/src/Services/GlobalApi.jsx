import axios from 'axios'

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key="8ca93b49f95bdd2607b2d74afc1c0650"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=8ca93b49f95bdd2607b2d74afc1c0650'

// https://api.themoviedb.org/3/trending/all/day?api_key=8ca93b49f95bdd2607b2d74afc1c0650
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}