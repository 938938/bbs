import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './pages/Post';
import Write from './pages/Write';

function App() {
// 여기서 카테고리데이터를 불러오기
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/new' element={<Write />} />
          <Route path='/edit/:id' element={<Write />} />
          <Route path='/post/:id' element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
