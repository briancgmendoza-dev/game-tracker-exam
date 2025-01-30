import { combineReducers } from "@reduxjs/toolkit";

import GamesSlice from "./games-slice";

export const rootReducers = combineReducers({
  games: GamesSlice
})
