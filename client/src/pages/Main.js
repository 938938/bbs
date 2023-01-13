import React, { useEffect } from 'react';
import dummy from '../MOCK_DATA.json';

import Search from '../util/Search';
import Bbs from '../util/Bbs';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const category = ['전체 카테고리', 'JAVA', 'Javascript', 'Database'];
  const navigate = useNavigate();

  useEffect(() => {}, []);
  return (
    <div className='Main'>
      <h2>자유 게시판 - 목록</h2>
      <Search category={category} />
      <Bbs data={dummy} />
      <button
        className='newBtn'
        onClick={() => {
          navigate(`/new`);
        }}
      >
        등록
      </button>
    </div>
  );
};

export default Main;
