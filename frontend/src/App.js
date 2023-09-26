import { PostList, PostForm } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={PostList} />
        <Route path="/create" component={PostForm} />
      </Routes>
    </Router>
  );
}

export default App;
