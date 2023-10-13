import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import spendingReducer from "./slices/spendingSlice";

export const store = configureStore({
  reducer: {
    categoryReducer,
    spendingReducer,
  },
});
