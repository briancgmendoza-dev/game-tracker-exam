import { createAsyncThunk } from "@reduxjs/toolkit"

import { getRequest } from "../service/request"
import { TGame, TGetGamesParams, TGameDetailed } from "../types"

export const getGames = createAsyncThunk<TGame[], TGetGamesParams, { rejectValue: string }>(
  "data/getGames", async ({ searchTerm, platform, category, sortBy }, thunkAPI) => {
    try {
      const queryParams: Record<string, string> = {}

      if (platform) queryParams.platform = platform
      if (category) queryParams.category = category
      if (sortBy) queryParams['sort-by'] = sortBy

      const queryString = new URLSearchParams(queryParams).toString()

      let response = await getRequest(`/games?${queryString}`)

      if (searchTerm) {
        response = response.filter((game: { title: string }) => game.title.toLowerCase().includes(searchTerm.toLowerCase()))
      }

      return response
    } catch (error) {
      console.log("Error in FE [app.get(/games)]", error)
      return thunkAPI.rejectWithValue("Error in fetching games")
    }
})

export const getGame = createAsyncThunk<TGameDetailed, string, { rejectValue: string }>(
  "data/getGame", async (id, thunkAPI) => {
    try {
      return await getRequest(`/game?id=${id}`)
    } catch (error) {
      console.log(`Error in FE [app.get(/game?id=${id})]`, error)
      return thunkAPI.rejectWithValue(`Error in fetching game with id: ${id}`)
    }
})

export const getCategories = createAsyncThunk<string[], void, { rejectValue: string }>(
  "data/getCategories", async (_, thunkAPI) => {
    try {
      return await getRequest('/categories')
    } catch (error) {
      console.log("Error in FE [app.get(/categories)]", error)
      return thunkAPI.rejectWithValue("Error in fetching categories")
    }
})
