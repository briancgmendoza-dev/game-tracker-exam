import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { getCategories } from "./thunk";
import { TRootState } from "../types";

const initialState: TRootState  = {
  data: [],
  status: "idle",
  error: "",
  categories: []
}

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelectedCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message!
      })
  }
})

export { getCategories }
export const { setSelectedCategories } = CategoriesSlice.actions;
export default CategoriesSlice.reducer
