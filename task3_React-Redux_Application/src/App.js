import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './redux/reducers/postReducer';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const store = configureStore({
  reducer: {
    posts: postReducer
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>React Redux Posts App</h1>
        <PostForm />
        <PostList />
      </div>
    </Provider>
  );
};

export default App;