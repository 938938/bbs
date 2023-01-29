import axios from 'axios';
import { API_URL } from '../global/env';

export const getBoardData = async () => {
  await axios
    .get(`${API_URL}/list`)
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((err) => console.log(err));
};
