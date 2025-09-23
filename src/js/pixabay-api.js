import axios from "axios";

export default async function getImagesByQuery(query) {
  const response = await axios.get("https://pixabay.com/api/?page=1", {
    params: {
      key: "52255318-c301db47a64feee351027f4f6",
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: "true",
      per_page: "15"
    }
  });

  return response;
}
