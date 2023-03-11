import axios from 'axios';
import { API_URL } from '../global/env';

export const getCategoryAPI = () => {
  try {
    const categoryData = axios
      .get(`${API_URL}/category`)
      .then((res) => res.data);
    return categoryData;
  } catch (err) {
    console.log(err);
  }
};
