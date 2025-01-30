import { createAsyncThunk } from "@reduxjs/toolkit"

import { getRequest } from "../service/request"
import { TGame } from "../types"

export const getGames = createAsyncThunk<TGame[], void, { rejectValue: string }>(
  "data/getGames", async (_, thunkAPI) => {
    try {
      return await getRequest("/games")
    } catch (error) {
      console.log("Error in FE [app.get(/games)]", error)
      return thunkAPI.rejectWithValue("Error in fetching games")
    }
})
