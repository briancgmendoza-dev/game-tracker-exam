import { createSlice } from "@reduxjs/toolkit"

import { getCategories } from "./thunk";
import { TRootState } from "../types";

const initialState: TRootState<string[]>  = {
  data: [],
  status: "idle",
  error: "",
}

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
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
export default CategoriesSlice.reducer
