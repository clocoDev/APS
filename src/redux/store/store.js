import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../slices/bannerSlice";
import reviewReducer from "../slices/testimonialSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    review: reviewReducer,
  },
});
