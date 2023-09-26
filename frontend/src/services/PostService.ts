import api from '../api';
import { IPost } from '../types';

export const PostService = () => {

  const getPosts = async (search?: string) => {
    try {
      const params = search ? `?search=${search}` : ''
      const response = await api.get<IPost[]>(`/posts${params}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener las publicaciones');
    }
  }

  const createPost = async ({ name, description }: Pick<IPost, 'name' | 'description'>) => {
    try {
      const response = await api.post('/posts', { name, description });
      return response.data;
    } catch (error) {
      throw new Error('Error al crear la publicación');
    }
  }

  const deletePost = async (id: IPost['id']) => {
    try {
      const response = await api.delete(`/posts/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al eliminar la publicación');
    }
  }

  return {
    getPosts,
    createPost,
    deletePost
  }
}
