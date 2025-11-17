import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllBanners = createAsyncThunk(
  "banner/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://aps-backend.cloco.com.au/api/banner/get"
      );
      localStorage.setItem(
        "allBanners",
        JSON.stringify(response?.data?.banner)
      );
      return response?.data?.banner;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Failed to fetch banners";
      return rejectWithValue(message);
    }
  }
);

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    banners: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBanners.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(fetchAllBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bannerSlice.reducer;
