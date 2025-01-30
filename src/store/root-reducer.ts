import { combineReducers } from "@reduxjs/toolkit";

import GamesSlice from "./games-slice";
import SearchSlice from "./search-slice"
import CategoriesSlice from "./categories-slice"

export const rootReducers = combineReducers({
  games: GamesSlice,
  search: SearchSlice,
  categories: CategoriesSlice
})
