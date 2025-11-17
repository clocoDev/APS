import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReviewDetails = createAsyncThunk(
  "review/fetchReviewDetails",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://aps-backend.cloco.com.au/api/testimonial/get`
      );
      localStorage.setItem("allReviews", JSON.stringify(response.data.result));
      return response.data.result;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch place details"
      );
    }
  }
);

const placeSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviewDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default placeSlice.reducer;
