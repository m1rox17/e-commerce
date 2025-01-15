import React, { useEffect, useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "/firebase-config.js";
import "./modal.scss";

export default function ModalAccount({ setOpenModal }) {
  const modalRef = useRef();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpenModal]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setOpenModal(false);
    }
  };

  return (
    <div className="modal__wrapper" onClick={handleClickOutside}>
      <div className="modal__content" ref={modalRef}>
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
