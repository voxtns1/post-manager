import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PostService } from '../services';
import { IPost } from '../types';

const INITIAL_STATE = {
    data: [] as IPost[],
    status: 'idle',
    error: null as null | string
}

const postSlice = createSlice({
    name: 'posts',
    initialState: INITIAL_STATE,
    reducers: {
        deletePost: (state, action) => {
            const postId = action.payload;
            state.data = state.data.filter((post) => post.id !== postId);

            PostService().deletePost(postId);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Error al cargar las publicaciones';
            })
            .addCase(addPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data.push(action.payload);
            })
            .addCase(addPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Error al agregar un nuevo post';
            });
    },
});

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try{
        const response = await PostService().getPosts();
        return response;    
    } catch (error) {
        throw new Error('Error al cargar los posts');
    }
});

export const addPost = createAsyncThunk<IPost, Pick<IPost, 'name' | 'description'>>('posts/addPost', async (newPost) => {
    try {
        const response = await PostService().createPost(newPost);
        return response;
    } catch (error) {
        throw new Error('Error al crear la publicación');
    }
});

export const { actions, reducer: postReducer } = postSlice