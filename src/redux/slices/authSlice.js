import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000";

// Load token and user from localStorage on app start
const loadAuthFromStorage = () => {
  try {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    return {
      token: token || null,
      user: user ? JSON.parse(user) : null,
    };
  } catch (error) {
    console.error("Error loading auth from storage:", error);
    return { token: null, user: null };
  }
};

// Login async thunk
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/user/login`,
        { email, password },
        { withCredentials: true }
      );
      
      if (response.data.success) {
        const { token, user } = response.data;
        
        // Store token and user in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        
        return {
          token,
          user,
        };
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Login failed. Please try again.";
      return rejectWithValue(message);
    }
  }
);

// Logout async thunk
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(
        `${API_URL}/api/user/logout`,
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return null;
    } catch (error) {
      // Even if API fails, clear local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      const message =
        error.response?.data?.message ||
        error.message ||
        "Logout failed. Please try again.";
      return rejectWithValue(message);
    }
  }
);

const { token: initialToken, user: initialUser } = loadAuthFromStorage();

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: initialToken,
    user: initialUser,
    isLoading: false,
    error: null,
    isAuthenticated: !!(initialToken && initialUser),
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setAuth: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = !!(action.payload.token && action.payload.user);
      
      if (action.payload.token && action.payload.user) {
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    },
    clearAuth: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
      })
      // Logout
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        // Clear auth even on error
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { clearError, setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;