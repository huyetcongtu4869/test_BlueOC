import { FETCH_POSTS, ADD_POST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../types';
import { fetchPostsFromApi, createPostApi } from '../../services/api';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS });
  try {
    const posts = await fetchPostsFromApi();
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const newPost = await createPostApi(post);
    dispatch({ type: ADD_POST, payload: newPost });
  } catch (error) {
    console.error('Error adding post:', error);
  }
};