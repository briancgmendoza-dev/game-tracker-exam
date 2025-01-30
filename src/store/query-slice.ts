import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TGetGamesParams } from '../types';

const initialState: TGetGamesParams = {
  searchTerm: '',
  platform: '',
  sortBy: 'release-date',
  category: ''
};

const QuerySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setPlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload
    },
    setSortBy: (state, action: PayloadAction<'release-date' | 'alphabetical' | 'relevance'>) => {
      state.sortBy = action.payload
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    }
  },
});

export const {
  setSearchTerm,
  setPlatform,
  setSortBy,
  setCategory
} = QuerySlice.actions;
export default QuerySlice.reducer;
