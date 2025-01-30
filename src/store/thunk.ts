import { createAsyncThunk } from "@reduxjs/toolkit"

import { getRequest } from "../service/request"
import { TGame } from "../types"

export const getGames = createAsyncThunk<TGame[], string, { rejectValue: string }>(
  "data/getGames", async (searchTerm, thunkAPI) => {
    try {
      let response = await getRequest("/games")

      if (searchTerm) {
        response = response.filter((game: { title: string }) => game.title.toLowerCase().includes(searchTerm.toLowerCase()))
      }

      return response
    } catch (error) {
      console.log("Error in FE [app.get(/games)]", error)
      return thunkAPI.rejectWithValue("Error in fetching games")
    }
})
