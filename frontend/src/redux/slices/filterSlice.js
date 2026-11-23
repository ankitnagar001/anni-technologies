import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  portfolioCategory: 'All',
  blogCategory: 'All',
  searchQuery: ''
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPortfolioCategory: (state, action) => {
      state.portfolioCategory = action.payload;
    },
    setBlogCategory: (state, action) => {
      state.blogCategory = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  }
});

export const { setPortfolioCategory, setBlogCategory, setSearchQuery } = filterSlice.actions;
export default filterSlice.reducer;
