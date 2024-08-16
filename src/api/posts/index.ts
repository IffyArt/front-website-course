import instance from '../instance';
import { Post } from './../../models/post/index';

export const getPosts = async () => {
  try {
    const response = await instance.get(`/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const getPost = async (id: string) => {
  try {
    const response = await instance.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
};

export const createPost = async (post: Post) => {
  try {
    const response = await instance.post(`/posts`, post);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const updatePost = async (id: string, updatedPost: Post) => {
  try {
    const response = await instance.put(`/posts/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};

export const deletePost = async (id: string) => {
  try {
    await instance.delete(`/posts/${id}`);
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};
