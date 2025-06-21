import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFood = createAsyncThunk("getFood", async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return response.data.categories;
  } catch (error) {
    console.log("Error fetching food items:", error);
  }
});
