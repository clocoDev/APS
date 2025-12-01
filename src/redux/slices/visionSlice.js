import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch Vision data
export const fetchVision = createAsyncThunk(
  "vision/fetchVision",
  async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/vision`);
    const data = await res.json();
    return data.vision;
  }
);

const visionSlice = createSlice({
  name: "vision",
  initialState: {
    vision: null,
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchVision.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVision.fulfilled, (state, action) => {
        state.loading = false;
        state.vision = action.payload;
      })
      .addCase(fetchVision.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch Vision data";
      });
  },
});

export default visionSlice.reducer;

