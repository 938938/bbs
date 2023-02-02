import './App.css';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';
import Post from './pages/Post';
import Write from './pages/Write';
import { getCategoryAPI } from './api/getCategory';
import { useEffect, useState } from 'react';

function App() {
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    const categoryData = await getCategoryAPI();
    console.log(categoryData);
    setCategory(categoryData);
  };
  useEffect(() => {
    getCategory();
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
