import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dummy from '../MOCK_DATA.json';
import { AiOutlineDownload } from 'react-icons/ai';

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    if (dummy.length >= 1) {
      const targetData = dummy.find((it) => parseInt(it.id) === parseInt(id));
      if (targetData) {
        setData(targetData);
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [id, dummy]);
  return (
    <div className='Post'>
      <h2>게시판 - 보기</h2>
      {data ? (
        <>
          <div className='postHead'>
            <span>{data.writer}</span>
            <span className='date'>
              등록일시 {data.create} 수정일시 {data.edit}
            </span>
            <h3>
              [{data.category}] {data.title}
            </h3>
            <span className='view'>조회수 : {data.view}</span>
          </div>
          <div className='text'>{data.text}</div>
          {data.file ? (
            <div className='file'>
              <AiOutlineDownload /> <span>{data.file}</span>
            </div>
          ) : (
            <></>
          )}
          <div className='commentBox'>
            {data.comment ? (
              <div className='comment'>
                <span className='commentDate'>{data.comment_date}</span>
                <span className='commentText'>{data.comment}</span>
              </div>
            ) : (
              <></>
            )}
            <form>
              <input placeholder='댓글을 입력해 주세요' />
              <button>등록</button>
            </form>
          </div>
          <div>
            <button>목록</button>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Post;
