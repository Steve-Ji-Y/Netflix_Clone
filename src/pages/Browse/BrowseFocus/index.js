import Modal from "../../../components/UI/Modal";
import styles from "./BrowseFocus.module.css";
import { useNavigate } from "react-router-dom";

const BrowseFocus = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    console.log('hit')
    navigate("../")
  }

  return <Modal onClose={closeHandler}>Heyy Its Modal</Modal>
}

export default BrowseFocus;
