import classes from "../OurProjects.module.css";
import React from "react";
import Image from "next/image";
import project1 from "../../../../public/project1.svg";
import ReactDOM from "react-dom";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // width: "900px",
  },
};
const CardModal = ({ details }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalObject_, setModalObject] = React.useState(details);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  React.useEffect(() => {
    console.log(details);
    setModalObject(details);
  }, [details]);
  return (
    <div>
      <button className={classes.detailsButton} onClick={openModal}>
        See Details
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        preventScroll={true}
        ariaHideApp={false}
      >
        <div className={classes.modalMain}>
          <div className={classes.modalContainer}>
            <div className={classes.modalImage}>
              <Image src={modalObject_.imageLink} alt="project" />
            </div>
            <div className={classes.modalText}>
              <h2>{modalObject_.heading}</h2>
              <p>{modalObject_.text1}</p>
              <p>{modalObject_.text2}</p>
              <h3>
                Live Link:
                <a
                  href={modalObject_.projectLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  {modalObject_.projectLink}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default CardModal;
