import { createSlice } from "@reduxjs/toolkit"

import { getGame } from "./thunk";
import { TGameDetailed, TRootState } from "../types";

const initialState: TRootState<TGameDetailed> = {
  data: null,
  status: "idle",
  error: ""
}

const GameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGame.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getGame.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(getGame.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message!
      })
  }
})

export { getGame }
export default GameSlice.reducer
