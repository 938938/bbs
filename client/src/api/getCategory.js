import axios from 'axios';
import { API_URL } from '../global/env';

export const getCategory = async () => {
  await axios
    .get(`${API_URL}/category`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
