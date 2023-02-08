import './App.css';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';
import Post from './pages/Post';
import Write from './pages/Write';
import { getCategoryAPI } from './api/getCategory';
import { useEffect, useState } from 'react';
import Login from './pages/Login';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    const data = await getCategoryAPI();
    setCategory(data);
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className='App'>
      <Routes>
        {isLogin ? (
          <Route path='/' element={<Login />} />
        ) : (
          <Route path='/' element={<Main />} />
        )}
        {/* <Route path='/new' element={<Write category={category} />} />
        <Route path='/edit/:id' element={<Write />} />
        <Route path='/post/:id' element={<Post />} /> */}
      </Routes>
    </div>
  );
}

export default App;
