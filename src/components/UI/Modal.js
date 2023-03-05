import React from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.css'

const Backdrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {

  return (
    <div className={styles.modal} >
      <div className={props.className}>{props.children}</div>
    </div>
  );
};



const Modal = (props) => {

  const portalElement =
  document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay className={props.className}>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
