import React from "react";
import "./Button.modal.css";

const Button = ({ fetchImages, amountImg }) => (
  <div className=" btnWrap">
    {amountImg % 12 === 0 ? (
      <button type="button" className="Button" onClick={fetchImages}>
        Load more...
      </button>
    ) : null}
  </div>
);

export default Button;
