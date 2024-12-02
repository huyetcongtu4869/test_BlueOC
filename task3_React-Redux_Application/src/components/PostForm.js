import React, { useState } from 'react';
import { addPost } from '../redux/actions/postActions';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      userId: 1 // Hardcoded for demo purposes
    };
   addPost(newPost);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>Add New Post</h2>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          required
        />
      </div>
      <div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post Content"
          required
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;

