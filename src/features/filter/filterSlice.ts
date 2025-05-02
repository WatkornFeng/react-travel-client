import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IinitailState {
  isModalFilterOpen: boolean;
}
const initialState: IinitailState = {
  isModalFilterOpen: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleModalFilter(state, action: PayloadAction<boolean>) {
      state.isModalFilterOpen = action.payload;
    },
  },
});

export const { toggleModalFilter } = filterSlice.actions;
export default filterSlice.reducer;
