import fetchData from "../../utils/axios";
import fetchConfig from "../../utils/tmdb";
import { redirect } from "react-router-dom";


const showsFetcher = async (url) => {
  try {
    const data = await fetchData(url);
    if (data.status === 200) {
        const shows = data.data.results.map((show) => {
          return {
            id: show.id,
            title: show.name || show.title,
            backdrop: show.backdrop_path,
            poster: show.poster_path,
            overview: show.overview,
            language: show.original_language,
          };
        })
        const sortedShows = shows.sort(() => {return Math.random() - 0.5});
        return sortedShows;
    } else {
      throw new Error('Error fetching data');
    }
  } catch (error) {
    return redirect('/error')
  }
}


const browseLoader = async () => {

  if (localStorage.getItem('uid')) {
    const collection = [];
    for (let key in fetchConfig) {
      const shows = await showsFetcher(fetchConfig[key]);
      collection.push({category: key, shows: shows})
    }
    return collection;
  } else {
    return redirect('/login')
  }

}

export default browseLoader
