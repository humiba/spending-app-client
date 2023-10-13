import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  /**
   * ID
   * CATEGORY
   */
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {},
    removeCategory: (state, action) => {},
    updateCategory: (state, action) => {},
    readCategory: (state) => {},
  },
});

export const { addCategory, removeCategory, updateCategory, readCategory } =
  categorySlice.actions;
  
export default categorySlice.reducer;
