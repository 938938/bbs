import axios from 'axios';
import { API_URL } from '../global/env';

export const getCategoryAPI = async () => {
  try {
    const categoryData = await axios
      .get(`${API_URL}/category`)
      .then((res) => res.data);
    return categoryData;
  } catch (err) {
    console.log(err);
  }
};
