import axios from 'axios';
import { API_URL } from '../global/env';

export const getPostData = async ({ id }) => {
  await axios
    .get(`${API_URL}/post/${id}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data[0]);
    })
    .catch((err) => console.log(err));
};
