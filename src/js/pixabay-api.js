import axios from "axios";

export default function getImagesByQuery(query) {
  return axios.get("https://pixabay.com/api/", {
    params: {
      key: "52255318-c301db47a64feee351027f4f6",
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: "true"
    }
  });
}