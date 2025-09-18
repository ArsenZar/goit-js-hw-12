import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
  console.log("Posts: ", response.data);
};

fetchPosts();