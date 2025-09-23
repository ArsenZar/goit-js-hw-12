import axios from "axios";

export default async function getImagesByQuery(query, count = 1) {
  try {
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
        key: "52255318-c301db47a64feee351027f4f6",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        per_page: "15",
        page: count
      }
    });

    return response.data;
  } catch (err){
    console.log(`Problem ${err}`);
  }


}
