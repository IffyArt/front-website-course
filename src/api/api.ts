// src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export type Post = {
  id: string;
  title: string;
  body: string;
  views: number;
};

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const createPost = async (post: Post) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, post);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const updatePost = async (id: string, updatedPost: Post) => {
  try {
    const response = await axios.put(`${API_URL}/posts/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};

export const deletePost = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/posts/${id}`);
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};
