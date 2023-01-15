import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineDownload } from 'react-icons/ai';
import axios from 'axios';

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  const getData = async () => {
    await axios
      .get(`http://localhost:4000/api/post/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const goBack = () => {
    navigate('/');
  };

  const goEdit = () => {
    navigate(`/edit/${id}`, {
      state: { data: data, type: 'edit' },
    });
  };

  return (
    <div className='Post'>
      <h2>게시판 - 보기</h2>
      {data ? (
        <>
          <div className='postHead'>
            <span>{data.writer}</span>
            <span className='date'>
              등록일시 {new Date(data.created).toLocaleDateString()} 수정일시{' '}
              {data.edit ? new Date(data.edit).toLocaleDateString() : '-'}
            </span>
            <h3>
              [{data.category_name}] {data.title}
            </h3>
            <span className='view'>조회수 : {data.view}</span>
          </div>
          <div className='text'>{data.contents}</div>
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
            <button onClick={goBack}>목록</button>
            <button onClick={goEdit}>수정</button>
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
