import React, { useEffect, useState } from 'react';
import Search from '../util/Search';
import Board from '../util/Board';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  /**
   * useEffect를 두 개로 나누는 것 / useEffect안에 기능을 두 개 넣는 것 ???
   * axios는 따로 설정해서 가급적 보이지 않게 숨기기
   */

  const getCategory = async () => {
    await axios
      .get('http://localhost:4000/api/category')
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getData = async () => {
    await axios
      .get('http://localhost:4000/api/list')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCategory();
    getData();
  }, []);

  const newPost = () => {
    navigate(`/new`, { state: { type: 'new' } });
  };

  return (
    <div className='Main'>
      <h2>자유 게시판 - 목록</h2>
      <Search category={category} />
      <Board data={data} />
      <button className='newBtn' onClick={newPost}>
        등록
      </button>
    </div>
  );
};

export default Main;
