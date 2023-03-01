import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Browse.module.css"


const Browse = () => {
  const navigate = useNavigate();
  const {logout} = useAuth();

  const clickHandler = () => {
    logout();
    navigate("/")
  }


  return (
    <div>Yes I made it here!!
      <button className={styles.signout} onClick={clickHandler}>Signout</button>
      <button className={styles.signout} >Fetch</button>
    </div>
  )
}

export default Browse;
