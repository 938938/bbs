import './App.css';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';
import Post from './pages/Post';
import Write from './pages/Write';
import { getCategory } from './api/getCategory';
import { useEffect, useState } from 'react';

function App() {
  // 여기서 카테고리데이터를 불러오기
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory(getCategory);
  }, []);
  console.log(category);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main category={category} />} />
        <Route path='/new' element={<Write category={category} />} />
        <Route path='/edit/:id' element={<Write />} />
        <Route path='/post/:id' element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
