import React, { useState, useEffect } from 'react';
import { PostService } from '../services';
import { IPost } from '../types';

export const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { getPosts } = PostService()

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Lista de Publicaciones</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

