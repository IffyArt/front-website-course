import { useEffect, useState } from 'react';
import { createPost, deletePost, getPosts, Post, updatePost } from './api/api';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts', error);
    }
  };

  const handleAddPost = async () => {
    const uuid: string = require('uuid').v4();
    const newPost: Post = {
      id: uuid,
      title: 'New Post',
      body: 'This is a new post.',
      views: 0,
    };
    try {
      const addedPost = await createPost(newPost);
      setPosts([...posts, addedPost]);
    } catch (error) {
      console.error('Failed to add post', error);
    }
  };

  const handleUpdatePost = async (id: string) => {
    const updatedPost = {
      id: '1',
      title: 'a title',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, aliquam, repudiandae assumenda dicta natus amet doloribus ipsum harum nostrum, ullam nemo architecto iusto? Corporis nihil quisquam necessitatibus vel voluptates esse?',
      views: 0,
    };
    try {
      const post = await updatePost(id, updatedPost);
      setPosts(posts.map((p) => (p.id === id ? post : p)));
    } catch (error) {
      console.error('Failed to update post', error);
    }
  };

  const handleDeletePost = async (id: string) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((p) => p.id !== id));
    } catch (error) {
      console.error('Failed to delete post', error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={handleAddPost}>Add Post</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleUpdatePost(post.id)}>Update</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
