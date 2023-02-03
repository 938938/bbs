import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Board from '../components/Board';
import { useNavigate } from 'react-router-dom';
import { getBoardDataAPI } from '../api/getBoardData';

const Main = ({ category }) => {
  // const [category, setCategory] = useState([]);
  const [boardData, setBoardData] = useState([]);
  const navigate = useNavigate();

  /**
   * useEffect를 두 개로 나누는 것 / useEffect안에 기능을 두 개 넣는 것 ???
   * axios는 따로 설정해서 가급적 보이지 않게 숨기기
   */

  const getBoardData = async () => {
    const data = await getBoardDataAPI();
    setBoardData(data);
  };

  useEffect(() => {
    getBoardData();
  }, []);

  const newPost = () => {
    navigate(`/new`, { state: { type: 'new' } });
  };

  return (
    <div className='Main'>
      <h2>자유 게시판 - 목록</h2>
      <Search category={category} />
      <Board boardData={boardData} />
      <button className='newBtn' onClick={newPost}>
        등록
      </button>
    </div>
  );
};

export default Main;
