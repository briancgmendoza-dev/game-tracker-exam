import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TGetGamesParams } from '../types';

const initialState: TGetGamesParams = {
  searchTerm: '',
  platform: '',
  category: '',
  sortBy: 'release-date'
};

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setPlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    setSortBy: (state, action: PayloadAction<'release-date' | 'alphabetical' | 'relevance'>) => {
      state.sortBy = action.payload
    }
  },
});

export const { setSearchTerm } = SearchSlice.actions;
export default SearchSlice.reducer;
