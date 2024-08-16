import { useEffect, useState } from 'react';
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from './api/posts';
import { Post } from './models/post';

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

  const fetchPost = async (id: string) => {
    try {
      const post = await getPost(id);
      console.log(post);
    } catch (error) {
      console.error('Failed to fetch post', error);
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
            <p>Views: {post.views}</p>
            <button onClick={() => fetchPost(post.id)}>Fetch Detail</button>
            <button onClick={() => handleUpdatePost(post.id)}>Update</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
