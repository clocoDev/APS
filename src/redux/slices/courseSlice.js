import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCourses = createAsyncThunk(
  "course/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:9000/api/course/get");
      localStorage.setItem(
        "allCourses",
        JSON.stringify(response?.data?.course)
      );
      return response?.data?.course;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch courses";
      return rejectWithValue(message);
    }
  }
);

const getInitialCourses = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("allCourses");
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: getInitialCourses(),
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchAllCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;
