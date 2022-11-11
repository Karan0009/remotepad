import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../reducers/content";

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});
