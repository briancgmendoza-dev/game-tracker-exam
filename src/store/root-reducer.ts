import { combineReducers } from "@reduxjs/toolkit";

import GamesSlice from "./games-slice";
import GameSlice from "./game-slice";
import QuerySlice from "./query-slice"
import CategoriesSlice from "./categories-slice"

export const rootReducers = combineReducers({
  games: GamesSlice,
  game: GameSlice,
  query: QuerySlice,
  categories: CategoriesSlice
})
