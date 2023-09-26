import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from '../types';
import { useFetchPosts } from '../hooks';

export const PostList = () => {
  const navigation = useNavigate();
  const { data, deletePost } = useFetchPosts();

  const [posts, setPosts] = useState<IPost[]>(data)
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchTitle, setSearchTitle] = useState('');
  const [searchDescription, setSearchDescription] = useState('');

  useEffect(() => {
    setPosts(data)
    setSearchTerm("")
    setSearchTitle("")
    setSearchDescription("")
  }, [data])

  const filterPostsName = (post: IPost, search: string) => post.name.toLowerCase().includes(search.toLowerCase()) || search === ''
  const filterPostsDescription = (post: IPost, search: string) => post.description.toLowerCase().includes(search.toLowerCase()) || search === ''

  const handleDelete = async (post: IPost) => {
    try {
      await deletePost(post.id);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  const handleCreate = () => navigation('/create')

  const handleSearch = () => {
    const posts = data.filter(post => {
      const titleMatch = filterPostsName(post, searchTerm);
      const descriptionMatch = filterPostsDescription(post, searchTerm);
      return titleMatch || descriptionMatch;
    });

    setPosts(posts);
  }

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
        <button onClick={handleSearch}>Buscar</button>
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
              const titleMatch = filterPostsName(post, searchTitle);
              const descriptionMatch = filterPostsDescription(post, searchTitle);
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

