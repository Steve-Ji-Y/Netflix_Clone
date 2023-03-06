import { redirect } from "react-router-dom";
import fetchData from "../../utils/axios";
import { api_key } from "../../utils/tmdb";

const showDetailFetcher = async (url) => {
  try {
    const result = await fetchData(url);
    if (result.status === 200) {
      return result.data;
    } else {
      throw new Error("Error fetching data");
    }
  } catch (error) {
    redirect("../error");
  }
};

const browseFocusLoader = async ({ params }) => {
  const id = params.id;
  const fetchurls = {
    detail: `/tv/${id}?api_key=${api_key}&language=en-US`,
    credits: `/tv/${id}/credits?api_key=${api_key}&language=en-US`,
    videos: `/tv/${id}/videos?api_key=${api_key}&language=en-US`,
    keywords: `/tv/${id}/keywords?api_key=${api_key}&language=en-US`,
  };
  if (localStorage.getItem("uid")) {
    const showDetail = await showDetailFetcher(fetchurls.detail);
    const showCredits = await showDetailFetcher(fetchurls.credits);
    const showVideos = await showDetailFetcher(fetchurls.videos);
    const showKeywords = await showDetailFetcher(fetchurls.keywords);
    const showInfo = {
      backdrop: showDetail.backdrop_path,
      num_seasons: showDetail.number_of_seasons,
      num_episodes: showDetail.number_of_episodes,
      overview: showDetail.overview,
      cast: showCredits.cast.map((cast) =>  cast.name),
      keywords: showKeywords.results.map((keyword) => keyword.name),
      video: showVideos.results.filter(result => result.type === 'Trailer' && result.site === 'YouTube')[0]?.key,
    };
    console.log(showInfo)
    return showInfo;
  } else {
    return redirect("/login");
  }
};

export default browseFocusLoader;
