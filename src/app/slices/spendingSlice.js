import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /**
   * ID
   * IN / OUT	
   * TIMESTAMP	
   * AMOUNT	
   * CATEGORY	
   * NOTE
   */
  spendings: [],
};

const spendingSlice = createSlice({
  name: "spending",
  initialState,
  reducers: {
    addSpending: (state, action) => {},
    removeSpending: (state, action) => {},
    updateSpending: (state, action) => {},
    readSpending: (state) => {},
    readSpendingByTime: (state, action) => {},
  },
});

export const {
  addSpending,
  removeSpending,
  updateSpending,
  readSpending,
  readSpendingByTime,
} = spendingSlice.actions;

export default spendingSlice.reducer;
