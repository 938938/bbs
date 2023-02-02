import axios from 'axios';
import { API_URL } from '../global/env';

export const getCategoryAPI = async () => {
  // await axios
  //   .get(`${API_URL}/category`)
  //   .then((res) => {
  //     return res.data;
  //   })
  //   .catch((err) => console.log(err));
  const categoryData = await fetch(`${API_URL}/category`).then((res) =>
    res.json()
  );
  return categoryData;
};
