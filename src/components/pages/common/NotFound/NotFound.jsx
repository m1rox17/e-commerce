import React from "react";
import "./error.scss";

export default function NotFound() {
  return (
    <div className="error__div">
      <h1 className="error__title">404 Not Found</h1>
      <p className="error__subtitle">
        Your visited page not found. You may go home page.
      </p>
    </div>
  );
}
