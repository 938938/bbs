import React, { useEffect } from 'react';
import dummy from '../MOCK_DATA.json';

import Search from '../util/Search';
import Bbs from '../util/Bbs';

const Main = () => {
  const category = ['전체 카테고리', 'JAVA', 'Javascript', 'Database'];

  useEffect(() => {}, []);
  return (
    <div className='Main'>
      <h2>자유 게시판 - 목록</h2>
      <Search category={category} />
      <Bbs data={dummy} />
      <button className='newBtn'>등록</button>
    </div>
  );
};

export default Main;
