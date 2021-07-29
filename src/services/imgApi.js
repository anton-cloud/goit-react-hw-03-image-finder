import axios from "axios";

export const fetchImages = (query = "", pageNumber = 1) => {
  return axios(
    `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=22368183-bf812a4cdd1e1ebd2a0bd646c&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => response.data.hits);
};

export { fetchImages as default };
