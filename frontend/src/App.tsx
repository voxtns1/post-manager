import { PostList, PostForm } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={PostList} />
        <Route path="/create" Component={PostForm} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
