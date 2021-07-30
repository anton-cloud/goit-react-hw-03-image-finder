import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import * as imagesApi from "../../src/services/imgApi";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import ImageGallery from "./imageGallery/ImageGallery";
import Loader from "./loader/Loader";

class App extends Component {
  state = {
    images: [],
    pageNumber: 1,
    search: "",
    error: "",
    isLoading: false,
    isModalOpen: false,
    largeImage: null,
  };

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchImages(false);
    }
  }

  onSearch = (search) => {
    this.setState({ search, images: [], pageNumber: 1 });
  };

  fetchImagesWithScroll = () => {
    this.fetchImages(true);
  };

  fetchImages = (scroll) => {
    this.setState({ isLoading: true });
    const { search, pageNumber } = this.state;
    imagesApi
      .fetchImages(search, pageNumber)
      .then((images) => {
        this.setState((state) => ({
          images: [...state.images, ...images],
          pageNumber: state.pageNumber + 1,
        }));
        return images[0];
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      })
      .then((firstLoadedImage) => {
        if (scroll) {
          const { id } = firstLoadedImage;

          const scrollY =
            document.getElementById(id).getBoundingClientRect().top +
            window.scrollY -
            80;
          window.scrollTo({
            top: scrollY,
            behavior: "smooth",
          });
        }
      });
  };

  openModal = (url) => {
    this.setState({
      isModalOpen: true,
      largeImage: url,
    });
  };
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isLoading, images, isModalOpen, largeImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery openModal={this.openModal} images={images} />
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {images.length > 0 && (
          <Button
            fetchImages={this.fetchImagesWithScroll}
            amountImg={images.length}
          />
        )}
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
