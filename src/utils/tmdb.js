
const api_key =  '8b934bec708de6f7e5b8851f78be478e';




const fetchConfig =  {
    Trending: `/trending/tv/week?api_key=${api_key}`,
    // Genre: `/genre/tv/list?api_key=${api_key}&language=en-US`,
    // Test: `/configuration/languages?api_key=${api_key}`,
    Action: `/discover/tv?api_key=${api_key}&language=en&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&without_genres=16&with_networks=213`,
    Anime: `/discover/tv?api_key=${api_key}&language=en&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=16&with_networks=213`,
    Comedies: `/discover/tv?api_key=${api_key}&language=en&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=35&with_networks=213`,
    Crime: `/discover/tv?api_key=${api_key}&language=en&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=80&with_networks=213`,
    Dramas: `/discover/tv?api_key=${api_key}&language=en&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=18&with_networks=213`,
    Documentaries: `/discover/tv?api_key=${api_key}&language=en&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=99&with_networks=213`,
    Fantasy: `/discover/tv?api_key=${api_key}&language=en&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10765&with_networks=213`,
    Family: `/discover/tv?api_key=${api_key}&language=en&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10751&with_networks=213`,
    Kids: `/discover/tv?api_key=${api_key}&language=en&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10762&with_networks=213`
  }


export {api_key};
export default fetchConfig
