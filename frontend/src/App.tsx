import { Provider } from 'react-redux';
import { PostList, PostForm } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={PostList} />
          <Route path="/create" Component={PostForm} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
