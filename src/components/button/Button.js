import React from "react";
import "./Button.modal.css";

const Button = ({ fetchImages }) => (
  <div className=" btnWrap">
    <button type="button" className="Button" onClick={fetchImages}>
      Load more...
    </button>
  </div>
);

export default Button;
