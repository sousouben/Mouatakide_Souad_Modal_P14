import React, { useState } from "react";
import "./modal.css";

function Modal(props) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={openModal}>Save</button>
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Employée Créated !</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
