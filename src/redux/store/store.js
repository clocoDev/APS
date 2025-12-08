import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../slices/bannerSlice";
import reviewReducer from "../slices/testimonialSlice";
import courseReducer from "../slices/courseSlice";
import visionReducer from "../slices/visionSlice.js";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    review: reviewReducer,
    course: courseReducer,
    vision: visionReducer,
  },
});
