import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, fetchPosts, addPost } from '../store/postSlice';
import { RootState } from '../store';
import { IPost } from '../types';

export const useFetchPosts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.posts.data);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchPosts() as any);
    }
  }, [dispatch, data]);

  const createPost = (post: Pick<IPost, 'name' | 'description'>) => {
    dispatch(addPost(post) as any)
  }

  const deletePost = (postId: IPost['id']) => {
    dispatch(actions.deletePost(postId))
  }

  return {
    data,
    deletePost,
    createPost
  };
};
