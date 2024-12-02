import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPostsFromApi = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createPostApi = async (post) => {
  const response = await axios.post(API_URL, post);
  return response.data;
};