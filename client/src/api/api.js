import axios from 'axios';

const host = 'http://localhost:4000/api';

// api 버전 명시해주는 것이 좋음

export const getCategory = async () => {
  await axios
    .get(`${host}/category`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const getBoardData = async () => {
  await axios
    .get(`${host}/list`)
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((err) => console.log(err));
};

export const getPostData = async ({ id }) => {
  await axios
    .get(`${host}/post/${id}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data[0]);
    })
    .catch((err) => console.log(err));
};
