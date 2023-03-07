import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Browsebillboard from "./BrowseBillboard";
import BrowseHeader from "./BrowseHeader/BrowseHeader";
import BrowseShows from "./BrowseShows/BrowseShows";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useScreenWidth from "../../hooks/useScreenWidth";
import styles from "./Browse.module.css";


const Browse = () => {
  const { logout } = useAuth();
  const collection = useLoaderData();
  const useBigBg = useScreenWidth(950);
  const newCollection = collection.map((category) => {
    if (category.category === 'Trending') {
      return {category:'Trending', shows: category.shows.slice(1)}
    } else {
      return category;
    }
  });
  const billBoardShow = collection[0].shows[0];


  return (
    <>
      <Outlet />
      <BrowseHeader />
      <Browsebillboard show={billBoardShow} useBigBg={useBigBg}/>
      <BrowseShows collection={newCollection} />
    </>
  );
};

export default Browse;
