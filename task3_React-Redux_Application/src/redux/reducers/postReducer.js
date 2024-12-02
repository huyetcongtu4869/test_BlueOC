import { FETCH_POSTS, ADD_POST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../types';

const initialState = {
    posts: [],
    loading: false,
    error: null
  };
  
  export const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS:
        return {
          ...state,
          loading: true
        };
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.payload,
          error: null
        };
      case FETCH_POSTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case ADD_POST:
        return {
          ...state,
          posts: [action.payload, ...state.posts]
        };
      default:
        return state;
    }
  };