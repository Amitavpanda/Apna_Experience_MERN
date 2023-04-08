import * as api from "../../api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action
export const getPosts = createAsyncThunk("getPosts", async () => {
  try {
    const { data } = await api.fetchPosts();
    return data;
  } catch (error) {
    console.log(error.message);
  }
});
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default postsSlice.reducer;
