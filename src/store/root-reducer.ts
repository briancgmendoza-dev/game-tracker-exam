import { combineReducers } from "@reduxjs/toolkit";

import GamesSlice from "./games-slice";
import SearchSlice from "./search-slice"

export const rootReducers = combineReducers({
  games: GamesSlice,
  search: SearchSlice
})
