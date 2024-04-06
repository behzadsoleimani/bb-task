import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { Comment } from "../utils/types";
import { getCommentsByPostId } from "../api/endPoints";

export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async (postId: number) => {
    return getCommentsByPostId(postId);
  }
);

interface CommentsState {
  comments: Comment[];
  loadingStatus: "loading" | "success" | "failed";
}

const initialState: CommentsState = {
  comments: [],
  loadingStatus: "loading",
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.loadingStatus = "loading";
    });
    builder.addCase(
      fetchComments.fulfilled,
      (state, action: PayloadAction<Comment[]>) => {
        state.loadingStatus = "success";
        state.comments = action.payload;
      }
    );
    builder.addCase(fetchComments.rejected, (state) => {
      state.loadingStatus = "failed";
      state.comments = [];
    });
  },
});

export default commentsSlice.reducer;
