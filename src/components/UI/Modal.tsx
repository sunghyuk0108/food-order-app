import React, { Fragment, ReactNode } from "react";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";

// 재사용 가능한 모달 만들기

const BackDrop:React.FC <{onHideCart: () => void}> = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverlay = (props: any) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

type ModalsProps = {
  onHideCart : () => void;
  children? : ReactNode;
}
const portalElement: any = document.querySelector("#overlays");

const Modal = ({onHideCart, children} : ModalsProps) => {
  console.log(children)
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onHideCart={onHideCart}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
