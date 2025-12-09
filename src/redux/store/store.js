import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../slices/bannerSlice";
import reviewReducer from "../slices/testimonialSlice";
import courseReducer from "../slices/courseSlice";
import authReducer from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    review: reviewReducer,
    course: courseReducer,
    auth: authReducer,
  },
});