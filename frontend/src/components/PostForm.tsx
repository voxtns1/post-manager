import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetchPosts } from '../hooks';

export const PostForm = () => {
  const navigation = useNavigate();
  const { createPost } = useFetchPosts()

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if ([name, description].includes("")) {
      console.error("Todos los datos son obligatorios")
      return;
    }

    try {
      createPost({name, description});
      setName('');
      setDescription('');

      navigation('/')
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className='container'>
      <h2>Crear Nueva Publicación</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Crear Publicación</button>
      </form>
    </div>
  );
}
