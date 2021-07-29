import React, { Component, createRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "./Modal.modal.css";

const MODAL_ROOT = document.querySelector("#modal-root");

class Modal extends Component {
  // state = {  }
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.code !== "Escape") {
      return;
    }

    this.props.onClose();
  };

  handleBackdropClick = (e) => {
    if (this.backdropRef.current && e.target !== this.backdropRef.current) {
      return;
    }

    this.props.onClose();
  };
  render() {
    const { children } = this.props;
    return createPortal(
      <div
        className="Overlay"
        ref={this.backdropRef}
        onClick={this.props.onClose}
        role="presentation"
      >
        <div className="Modal">{children}</div>
      </div>,
      MODAL_ROOT
    );
  }
}

export default Modal;
