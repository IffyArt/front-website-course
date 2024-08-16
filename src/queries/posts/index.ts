import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '../../api/posts';
import { ApiModule } from '../../enums/api-module';
import { queryClient } from '../../helpers/query-client';
import { Post } from '../../models/post';

const moduleName = ApiModule.POSTS;

const queryKeys = {
  list: () => [moduleName, 'list'] as const,
  retrieve: (id: string) => [moduleName, 'retrieve', id] as const,
};

export const usePostList = () => {
  return useQuery<Post[]>({
    queryKey: queryKeys.list(),
    queryFn: () => getPosts(),
  });
};

export const usePostRetrieve = (id: string) => {
  return useQuery({
    queryKey: queryKeys.retrieve(id),
    queryFn: () => getPost(id),
    enabled: !!id,
  });
};

export const usePostCreate = () => {
  return useMutation({
    mutationFn: (data: Post) => createPost(data),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.retrieve(data.id), data);
    },
  });
};

export const usePostUpdate = (id: string) => {
  return useMutation({
    mutationFn: (data: Post) => updatePost(id, data),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.retrieve(id), data);
    },
  });
};

export const usePostDestroy = () => {
  return useMutation({
    mutationFn: (id: string) => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.list() });
    },
  });
};
