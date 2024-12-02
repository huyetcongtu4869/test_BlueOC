1. Components (React)
PostForm
- Functionality: This is a simple form that allows users to input the title and body of a post and submit it to the server.
- State:
    title: Stores the title of the post.
    body: Stores the content of the post.
- handleSubmit:
    When the form is submitted, a newPost object is created and sent via the addPost function (which calls an API to save the post).
    After a successful submission, the form is reset to its default values (empty).
- PostList
    Functionality: Displays the list of posts fetched from Redux state.
- Redux:
    Uses useSelector to retrieve the data from the Redux state (posts, loading, and error).
    Dispatches an action to fetch the data from the API (fetchPosts).
    Displays a loading message or error message based on the current state.
2. Actions (Redux)
- fetchPosts:
    This action dispatches different actions to start fetching posts (FETCH_POSTS), handle success (FETCH_POSTS_SUCCESS), or handle failure (FETCH_POSTS_FAILURE).
    This is an asynchronous action since it calls the API to fetch the data.
- addPost:
    This action handles creating a new post. After calling the API to create the new post (createPostApi), it dispatches the ADD_POST action to update the Redux state with the new post.
3. Reducers (Redux)
- Initial state:
    posts: An array containing the list of posts.
    loading: A flag indicating whether data is being fetched from the API.
    error: Stores any error message if something goes wrong.
- Actions:
    FETCH_POSTS: Sets loading to true, indicating that the data is being fetched.
    FETCH_POSTS_SUCCESS: Updates the posts array in the state with the fetched data and sets loading to false.
    FETCH_POSTS_FAILURE: If an error occurs while fetching data, it sets loading to false and stores the error message.
    ADD_POST: Adds the newly created post to the beginning of the posts array.
4. Types (Redux)
types.js
- Defines constants for the action types:
    FETCH_POSTS, ADD_POST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE help identify the actions that you want to handle in reducers.
5. API (axios)
api.js
- fetchPostsFromApi:
    Uses axios to fetch the list of posts from the URL https://jsonplaceholder.typicode.com/posts.
- createPostApi:
    Sends a POST request to the API to create a new post and saves it to the API.
6. Redux Store (Provider)
Provider:
- The Provider component from react-redux wraps the entire application to provide the Redux store to all child components. The store is configured using configureStore from Redux Toolkit, which helps reduce boilerplate code in Redux.