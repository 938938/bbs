import axios from 'axios';
import { API_URL } from '../global/env';

export const getBoardDataAPI = async () => {
  try {
    const boardData = await axios
      .get(`${API_URL}/list`)
      .then((res) => res.data);
    return boardData;
  } catch (err) {
    console.log(err);
  }
};
