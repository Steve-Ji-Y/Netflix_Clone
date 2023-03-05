import axios from "axios";
import fetchConfig from "./tmdb";

const instance =  axios.create({
  baseURL:'https://api.themoviedb.org/3',
  method: 'get',
})


const fetchData = async (fetchURL) => {

  const result = await instance.get(fetchURL);
  return result;

}

export default fetchData
