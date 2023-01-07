import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/new' element={<Post />} />
          <Route path='/edit/:id' element={<Post />} />
          <Route path='/post/:id' element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
