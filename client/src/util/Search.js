import React from 'react';

const Search = ({ category }) => {
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
          {category.map((ele) => (
            <option key={ele.id}>{ele.category_name}</option>
          ))}
        </select>
        <input type='text' />
        <button>검색</button>
      </div>
    </form>
  );
};

export default Search;
