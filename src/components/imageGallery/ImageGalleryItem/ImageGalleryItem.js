import React from "react";
import propTypes from "prop-types";
import "./ImageGalleryItem.modal.css";

const ImageGalleryItem = ({ image, openModal }) => {
  const { webformatURL, tags } = image;

  return (
    <li id={image.id} onClick={openModal} className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: propTypes.shape({
    webformatURL: propTypes.string,
  }),
};

export default ImageGalleryItem;
