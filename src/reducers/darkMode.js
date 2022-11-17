import { createSlice } from "@reduxjs/toolkit";

const darkModeColors = {
  primaryColor: "#ffffff",
  tertiaryColor: "#000000",
};

const lightModeColors = {
  primaryColor: "#000000",
  tertiaryColor: "#ffffff",
};

const initialState = {
  isDarkModeEnabled: true,
  colors: darkModeColors,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: initialState,
  reducers: {
    setIsDarkModeEnabled: (state, action) => {
      state.isDarkModeEnabled = action.payload;
      state.colors = action.payload ? darkModeColors : lightModeColors;
    },
  },
});

export const { setIsDarkModeEnabled } = darkModeSlice.actions;

export default darkModeSlice.reducer;
