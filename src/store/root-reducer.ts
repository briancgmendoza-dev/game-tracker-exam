import { combineReducers } from "@reduxjs/toolkit";

import GamesSlice from "./games-slice";
import GameSlice from "./game-slice";
import SearchSlice from "./search-slice"
import CategoriesSlice from "./categories-slice"

export const rootReducers = combineReducers({
  games: GamesSlice,
  game: GameSlice,
  search: SearchSlice,
  categories: CategoriesSlice
})
