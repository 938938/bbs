import React, { useState } from 'react';
// import { MdOutlineAttachFile } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Board = ({ boardData }) => {
  const navigate = useNavigate();

  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const numButton = Math.ceil(boardData.length / limit);

  const goPost = (id) => {
    navigate(`/post/${id}`);
  };
  const prePage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);
  const selectPage = (index) => setPage(index + 1);

  return (
    <div className='board'>
      <span className='total'>총 {boardData.length}건</span>
      <table>
        <thead>
          <tr>
            <th>카테고리</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>등록 일시</th>
            <th>수정 일시</th>
          </tr>
        </thead>
        <tbody>
          {boardData.slice(offset, offset + limit).map((ele) => (
            <tr key={ele.id} onClick={() => goPost(ele.id)}>
              <td>{ele.category_name}</td>
              <td>
                {/* <div className='file'>
                  {ele.file !== '' ? <MdOutlineAttachFile /> : ''}
                </div> */}
                {ele.title}
              </td>
              <td>{ele.writer}</td>
              <td>{ele.view}</td>
              <td>{new Date(ele.created).toLocaleDateString()}</td>
              <td>
                {ele.edit ? new Date(ele.edit).toLocaleDateString() : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <button onClick={prePage} disabled={page === 1}>
          &lt;
        </button>
        {Array(numButton)
          .fill()
          .map((_, i) => (
            <button
              key={i}
              onClick={() => selectPage(i)}
              disabled={page === i + 1}
            >
              {i + 1}
            </button>
          ))}
        <button onClick={nextPage} disabled={page === numButton}>
          &gt;
        </button>
      </nav>
    </div>
  );
};

export default Board;
