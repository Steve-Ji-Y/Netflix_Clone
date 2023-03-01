
const api_key =  '8b934bec708de6f7e5b8851f78be478e';




const fetchConfig =  {
    key: api_key,
    Trending: `/trending/all/week?api_key=${api_key}&language=en-US&with_networks=213`,
    TopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    ActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
    ComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
    HorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
    RomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    Mystery: `/discover/movie?api_key=${api_key}&with_genres=9648`,
    SciFi: `/discover/movie?api_key=${api_key}&with_genres=878`,
    Western: `/discover/movie?api_key=${api_key}&with_genres=37`,
    Animation: `/discover/movie?api_key=${api_key}&with_genres=16`,
    TV: `/discover/movie?api_key=${api_key}&with_genres=10770`,
}


export default fetchConfig
