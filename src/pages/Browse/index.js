import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Browsebillboard from "./BrowseBillboard";
import BrowseHeader from "./BrowseHeader/BrowseHeader";
import BrowseShows from "./BrowseShows/BrowseShows";
import styles from "./Browse.module.css";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";

// testing ONLY
import fetchData from "../../utils/axios";
import fetchConfig from "../../utils/tmdb";


const Browse = () => {
  const { logout } = useAuth();
  const collection = useLoaderData();

  const billBoardShow = collection[0].shows[0];


  // const showFocus = () => {
  //   setIsFocus(true);
  // }

  // const hideFocus = () => {
  //   setIsFocus(false);
  // }

  return (
    <>
      <Outlet />
      <BrowseHeader />
      <Browsebillboard show={billBoardShow}/>
      <BrowseShows collection={collection} />
    </>
  );
};

export default Browse;
