import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./CounterSlice";
import { foodSlice } from "./FoodSlice";
export const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer, 
    foodSlice: foodSlice.reducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
