import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getAllPosts } from '../api/endPoints';
import { Post } from '../utils/types';

interface PostsState {
  posts: Post[];
  loadingStatus: 'loading' | 'success' | 'failed';
}

const initialState: PostsState = {
  posts: [],
  loadingStatus: 'loading',
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      return getAllPosts();
    } catch {
      return rejectWithValue('An unknown error occurred');
    }
  }
);
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loadingStatus = 'loading';
    });
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.loadingStatus = 'success';
        state.posts = action.payload;
      }
    );
    builder.addCase(fetchPosts.rejected, (state) => {
      state.loadingStatus = 'failed';
      state.posts = [];
    });
  },
});

export default postsSlice.reducer;
