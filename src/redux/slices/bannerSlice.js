import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllBanners = createAsyncThunk("banner/fetchAll", async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/banner/get`
  );
  localStorage.setItem("allBanners", JSON.stringify(res.data.banner));
  return res.data.banner;
});

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
