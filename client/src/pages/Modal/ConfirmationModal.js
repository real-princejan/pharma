import React from "react";

const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }) => {
  return (
    <div className={`confirmation-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <p>{message}</p>
        <div className="button-container">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
