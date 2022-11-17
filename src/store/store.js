import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../reducers/content";
import darkModeReducer from "../reducers/darkMode";

export const store = configureStore({
  reducer: {
    content: contentReducer,
    darkMode: darkModeReducer,
  },
});
