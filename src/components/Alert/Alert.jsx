import React, { useState } from "react";
import "./Alert.css";

export default function Alert({ type = "is-info", message }) {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
    }, 300); // 300ms = durée de l'animation
  };

  if (!visible) return null;

  return (
    <div className={`notification ${type}  ${closing ? "slide-up" : ""}`}>
      <button
        type="button"
        className="delete"
        onClick={handleClose}
        aria-label="fermer"
      />
      {message}
    </div>
  );
}
