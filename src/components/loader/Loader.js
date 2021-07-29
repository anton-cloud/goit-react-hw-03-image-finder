import React from "react";
import Loader from "react-loader-spinner";
import "./Loader.modal.css";

const loaderComp = () => {
  return (
    <div className="loaderWrap">
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={50}
        width={120}
        timeout={3000} // 3 secs
      />
    </div>
  );
};

export default loaderComp;
