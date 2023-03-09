import Browsebillboard from "./BrowseBillboard";
import BrowseHeader from "./BrowseHeader/BrowseHeader";
import BrowseShows from "./BrowseShows/BrowseShows";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useScreenWidth from "../../hooks/useScreenWidth";
import styles from "./Browse.module.css";
import { useEffect, useState } from "react";


const Browse = () => {
  const collection = useLoaderData();
  const useBigBg = useScreenWidth(950);

  // const [showCollections, setShowCollections] = useState(null);
  // const [billBoardShow, setBillBoardShow] = useState(null);

  // useEffect(() => {
  //   setShowCollections(collection.map((category) => {
  //     if (category.category === 'Trending') {
  //       return {category:'Trending', shows: category.shows.slice(1)}
  //     } else {
  //       return category;
  //     }
  //   }));
  //   // setBillBoardShow(collection[0].shows[0]);
  // }, [collection]);

  useEffect(() => {console.log(collection)}, [])

  const showCollection = collection.map((category) => {
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
      <BrowseShows collection={showCollection} />
    </>
  );
};

export default Browse;
