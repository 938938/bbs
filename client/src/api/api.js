import axios from 'axios';

const host = 'http://localhost:4000/api';

export const getCategory = async () => {
  await axios
    .get(`${host}/category`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
