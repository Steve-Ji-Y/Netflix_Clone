import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Browsebillboard from "./browseBillboard";
import BrowseHeader from "./browseHeader/browseHeader";
import styles from "./Browse.module.css";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";

// testing ONLY
import fetchData from "../../utils/axios";
import ShowRow from "./showRow/showRow";
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
      {collection.map((item) => {return <ShowRow key={item.category} category={item.category} shows={item.shows} />})}
    </>
  );
};

export default Browse;
