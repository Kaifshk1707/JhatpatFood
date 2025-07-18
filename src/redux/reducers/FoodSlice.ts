import { createSlice } from "@reduxjs/toolkit";
import { getFood } from "../Actions/FoodAction";

const initialState = {
  foods: [],
};

export const foodSlice = createSlice({
  name: "foods",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFood.fulfilled, (state, action) => {
      state.foods = action.payload;
      // console.log("Food items fetched successfully:", action.payload);
    });
  },
});
export default foodSlice.reducer;
