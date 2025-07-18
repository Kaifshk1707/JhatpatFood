import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import foodReducer from "./reducers/FoodSlice";

export const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
    foodSlice: foodReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
