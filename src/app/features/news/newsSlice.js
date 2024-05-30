import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchArticles } from "../../../services/Api";
import {
  pushErrorNotification,
  pushSuccessNotification,
} from "../../../utils/pushNotification";

// Thunk for fetching news
export const getArticles = createAsyncThunk(
  "news/fetchArticles",
  async (filters) => {
    try {
      const data = await fetchArticles(filters);
      pushSuccessNotification(
        data.articles.length === 0
          ? "Not Found Data for given parameters"
          : "Successfully fetched articles!"
      );
      return data.articles;
    } catch (error) {
      pushErrorNotification(error.msg || "Failed to fetch articles");
    }
  }
);

// Initial state
const initialState = {
  articles: [],
  status: "loading", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Slice
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.status = "loading"; // You can differentiate loading status for search if needed
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
