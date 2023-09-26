import React, { useState } from 'react';
import { PostService } from '../services';

export const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { createPost } = PostService()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        await createPost(title, body);
        setTitle('');
        setBody('');
      } catch (error) {
        console.error(error.message);
      }
  };

  return (
    <div>
      <h2>Crear Nueva Publicación</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Cuerpo:</label>
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>
        <button type="submit">Crear Publicación</button>
      </form>
    </div>
  );
}
