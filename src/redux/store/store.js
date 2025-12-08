import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../slices/bannerSlice";
import reviewReducer from "../slices/testimonialSlice";
import courseReducer from "../slices/courseSlice";
import eventReducer from "../slices/eventSlice"; 
import visionReducer from "../slices/visionSlice.js";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    review: reviewReducer,
    course: courseReducer,
    event: eventReducer,
    vision: visionReducer,
  },
});