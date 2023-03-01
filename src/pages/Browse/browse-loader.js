import fetchData from "../../utils/axios";
import fetchConfig from "../../utils/tmdb";
import { redirect } from "react-router-dom";



const browseLoader = () => {


  if (localStorage.getItem('uid')) {
    return 2
  } else {
    return redirect('/login')
  }

}


export default browseLoader
