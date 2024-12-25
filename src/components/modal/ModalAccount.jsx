import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "/firebase-config.js";
import "./modal.scss";

export default function ModalAccount({ setOpenModal }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal__wrapper">
      <div className="modal__content">
        <h1>Account</h1>
        <button className="account-button" onClick={handleLogout}>
          Logout
        </button>
        <button onClick={() => setOpenModal(false)} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
}
