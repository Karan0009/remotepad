import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: "",
  isDataLoaded: false,
};

export const contentSlice = createSlice({
  name: "content",
  initialState: initialState,
  reducers: {
    setIsDataLoaded: (state, action) => {
      state.isDataLoaded = action.payload;
    },
  },
});

export const { setIsDataLoaded } = contentSlice.actions;

export default contentSlice.reducer;
