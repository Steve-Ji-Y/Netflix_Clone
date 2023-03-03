import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Browsebillboard from "./browseBillboard";
import BrowseHeader from "./browseHeader/browseHeader";
import styles from "./Browse.module.css";

// testing ONLY
import fetchData from "../../utils/axios";

const Browse = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const clickHandler = async () => {
      const result = await fetchData();
  };

  return (
    <>
      <BrowseHeader />
      <Browsebillboard />
      <button className={styles.testing} onClick={clickHandler}>fetch</button>
    </>
  );
};

export default Browse;
