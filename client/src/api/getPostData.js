import axios from 'axios';
import { API_URL } from '../global/env';

export const getPostDataAPI = async ({ id }) => {
  console.log(`${API_URL}/post/${id}`);
  try {
    const postData = await axios
      .get(`${API_URL}/post/${id}`)
      .then((res) => res.data);
    return postData;
  } catch (err) {
    console.log(err);
  }
};
