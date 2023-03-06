import Modal from "../../components/UI/Modal";
import styles from "./BrowseFocus.module.css";
import { useNavigate, useLoaderData } from "react-router-dom";
import BrowseFocusDetail from "./BrowseFocusDetail/BrowseFocusDetail";
import BrowseFocusPreview from "./BrowseFocusPreview/BrowseFocusPreview";


const BrowseFocus = () => {
  const navigate = useNavigate();
  const showInfo = useLoaderData();
  console.log(showInfo)
  const closeHandler = () => {
    console.log('hit')
    navigate("../")
  }

  return <Modal onClose={closeHandler} className={styles.BrowseContent}>
    <BrowseFocusPreview img={showInfo.backdrop}/>
    <BrowseFocusDetail showInfo={showInfo}/>
  </Modal>
}

export default BrowseFocus;
