import api from '../api';
import { IPost } from '../types';

export const PostService = () => {

  const getPosts = async () => {
    try {
      const response = await api.get<IPost[]>('/posts');
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener las publicaciones');
    }
  }

  const createPost = async (title: string, body: string) => {
    try {
      const response = await api.post('/posts', { title, body });
      return response.data;
    } catch (error) {
      throw new Error('Error al crear la publicación');
    }
  }

  return {
    getPosts,
    createPost
  }
}
