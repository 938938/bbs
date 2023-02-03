import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineDownload } from 'react-icons/ai';
import { getPostDataAPI } from '../api/getPostData';

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState();

  const getPostData = async () => {
    const data = await getPostDataAPI({ id });
    setPostData(data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  const goBack = () => {
    navigate('/');
  };

  const goEdit = () => {
    navigate(`/edit/${id}`, {
      state: { postData: postData, type: 'edit' },
    });
  };

  return (
    <div className='Post'>
      <h2>게시판 - 보기</h2>
      {postData ? (
        <>
          <div className='postHead'>
            <span>{postData.writer}</span>
            <span className='date'>
              등록일시 {new Date(postData.created).toLocaleDateString()}{' '}
              수정일시{' '}
              {postData.edit
                ? new Date(postData.edit).toLocaleDateString()
                : '-'}
            </span>
            <h3>
              [{postData.category_name}] {postData.title}
            </h3>
            <span className='view'>조회수 : {postData.view}</span>
          </div>
          <div className='text'>{postData.contents}</div>
          {postData.file ? (
            <div className='file'>
              <AiOutlineDownload /> <span>{postData.file}</span>
            </div>
          ) : (
            <></>
          )}
          <div className='commentBox'>
            {postData.comment ? (
              <div className='comment'>
                <span className='commentDate'>{postData.comment_date}</span>
                <span className='commentText'>{postData.comment}</span>
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
