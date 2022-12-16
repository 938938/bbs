import React from 'react';

const Search = () => {
  return (
    <form>
      <div>
        <span>등록일</span>
        <input type='date' />
        <span>~</span>
        <input type='date' />
      </div>
      <div>
        <select>
          <option>전체 카테고리</option>
          <option>JAVA</option>
          <option>Javascript</option>
          <option>Database</option>
        </select>
        <input type='text' />
        <button>검색</button>
      </div>
    </form>
  );
};

export default Search;
