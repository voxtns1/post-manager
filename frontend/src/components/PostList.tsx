import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostService } from '../services';
import { IPost } from '../types';

export const PostList = () => {
  const navigation = useNavigate();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchTitle, setSearchTitle] = useState('');
  const [searchDescription, setSearchDescription] = useState('');
  const { getPosts, deletePost } = PostService()

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getPosts(searchTerm);
      setPosts(fetchedPosts);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (post: IPost) => {
    try {
      await deletePost(post.id);
      const updatedPosts = posts.filter(p => p.id !== post.id);
      setPosts(updatedPosts);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  const handleCreate = () => navigation('/create')

  return (
    <div className="container">
      <h2>Lista de Publicaciones</h2>
      <div className='search'>
        <input
          type="text"
          placeholder="Buscar por título..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={fetchPosts}>Buscar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {posts
            .filter((post) => {
              const titleMatch =
                post.name.toLowerCase().includes(searchTitle.toLowerCase()) ||
                searchTitle === '';
              const descriptionMatch =
                post.description
                  .toLowerCase()
                  .includes(searchDescription.toLowerCase()) ||
                searchDescription === '';
              return titleMatch && descriptionMatch;
            })
            .map((post) => (
              <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td  className='textCenter'>
                  <button onClick={() => handleDelete(post)}>Eliminar</button>
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Buscar por título..."
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Buscar por descripción..."
                value={searchDescription}
                onChange={(e) => setSearchDescription(e.target.value)}
              />
            </td>
            <td className='pt-0 textCenter'>
              <button onClick={handleCreate}>Crear</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

