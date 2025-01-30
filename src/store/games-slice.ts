import { createSlice } from "@reduxjs/toolkit"

import { getGames } from "./thunk";
import { TRootState } from "../types";

const initialState: TRootState = {
  data: null,
  status: "idle",
  error: ""
}

const GamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGames.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(getGames.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message!
      })
  }
})

export { getGames }
export default GamesSlice.reducer
