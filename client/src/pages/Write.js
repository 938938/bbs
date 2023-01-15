import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Write = () => {
  const { state } = useLocation();
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [writer, setWriter] = useState('');
  const [pw, setPw] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  /**
   * 같은 데이터를 두번 불러와도 되는지
   * ex) 카테고리 데이터를 메인과 포스팅 양 쪽에서 사용.
   * App.js 에서 불러와서 Context를 사용?
   */

  const getCategory = async () => {
    await axios
      .get('http://localhost:4000/api/category')
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCategory();
    setData(state.data);
  }, []);

  const newData = () => {
    console.log('new!');
  };
  const uploadData = () => {
    console.log('upload!');
  };

  return (
    <div className='Post'>
      <h2>게시판 - {state.type === 'new' ? '등록' : '수정'}</h2>
      <div>
        <span>카테고리</span>
        {state.type === 'new' ? (
          <select>
            <option>카테고리 선택</option>
            {category.map((ele) => (
              <option key={ele.id}>{ele.category_name}</option>
            ))}
          </select>
        ) : (
          data.category_name
        )}
      </div>
      {state.type === 'new' ? (
        ''
      ) : (
        <>
          <div>
            <span>등록일시</span>
            <span>{new Date(data.created).toLocaleDateString()}</span>
          </div>
          <div>
            <span>수정일시</span>
            <span>{new Date(data.edit).toLocaleDateString()}</span>
          </div>
          <div>
            <span>조회수</span>
            <span>{data.view}</span>
          </div>
        </>
      )}
      <div>
        <span>작성자</span>
        {state.type === 'new' ? (
          <input type='text' autoComplete='off' />
        ) : (
          <input type='text' value={data.writer} />
        )}
      </div>
      <div>
        <span>비밀번호</span>
        {state.type === 'new' ? (
          <div>
            <input type='password' autoComplete='off' />
            <input type='password' />
          </div>
        ) : (
          <input type='password' />
        )}
      </div>
      <div>
        <span>제목</span>
        {state.type === 'new' ? (
          <input type='text' />
        ) : (
          <input type='text' value={data.title} />
        )}
      </div>
      <div>
        <span>내용</span>
        {state.type === 'new' ? (
          <textarea />
        ) : (
          <textarea value={data.contents} />
        )}
      </div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        취소
      </button>
      <button onClick={state.type === 'new' ? newData : uploadData}>
        저장
      </button>
    </div>
  );
};

export default Write;
