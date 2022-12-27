import { createSlice } from "@reduxjs/toolkit";


const SearchTagSlice = createSlice({
  name: "searchTagSlice",
  initialState: "",
  reducers: {
    searchTagAction: (state, action) => {
      return state = action.payload;
    },
  },
});

export const SearchTagReducer = SearchTagSlice.reducer;
export const { searchTagAction } = SearchTagSlice.actions;
export default SearchTagSlice;
