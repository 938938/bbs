import React, { useState } from 'react';
import { MdOutlineAttachFile } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Bbs = ({ data }) => {
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const numButton = Math.ceil(data.length / limit);
  const navigate = useNavigate();
  return (
    <div className='bbs'>
      <span className='total'>총 {data.length}건</span>
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
          {data.slice(offset, offset + limit).map((ele) => (
            <tr
              key={ele.id}
              onClick={() => {
                navigate(`/post/${ele.id}`);
              }}
            >
              <td>{ele.category}</td>
              <td>
                <div className='file'>
                  {ele.file !== '' ? <MdOutlineAttachFile /> : ''}
                </div>
                {ele.title}
              </td>
              <td>{ele.writer}</td>
              <td>{ele.view}</td>
              <td>{ele.create}</td>
              <td>{ele.edit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>
        {Array(numButton)
          .fill()
          .map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              disabled={page === i + 1}
            >
              {i + 1}
            </button>
          ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numButton}>
          &gt;
        </button>
      </nav>
    </div>
  );
};

export default Bbs;
