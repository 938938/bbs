import React from 'react';

const Write = () => {
  return (
    <>
      <div>
        <span>작성자</span>
        <input type='text' autoComplete='off' />
      </div>
      <div>
        <span>비밀번호</span>
        <div>
          <input type='password' autoComplete='off' />
          <input type='password' />
        </div>
      </div>
      <div>
        <span>제목</span>
        <input type='text' />
      </div>
      <div>
        <span>내용</span>
        <textarea />
      </div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        취소
      </button>
      <button>저장</button>
    </>
  );
};

export default Write;
