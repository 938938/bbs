import React from 'react';

const Main = () => {
  const category = ["전체 카테고리", "JAVA", "Javascript", "Database"]
  return (
    <div>
      <h2>자유 게시판 - 목록</h2>
      <form>
        <div>
          <span>등록일</span>
          <input type='date' />
          <span>~</span>
          <input type='date' />
        </div>
        <div>
          <select>
            {category.map((ele)=>(
              <option>{ele}</option>
            ))}
          </select>
          <input type='text' />
          <button>검색</button>
        </div>
      </form>
    </div>
  );
};

export default Main;
