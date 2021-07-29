import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const KEY = "22368183-bf812a4cdd1e1ebd2a0bd646c";

export const fetchImages = (query = "", pageNumber = 1) => {
  return axios(
    `${BASE_URL}?q=${query}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => response.data.hits);
};

export { fetchImages as default };
