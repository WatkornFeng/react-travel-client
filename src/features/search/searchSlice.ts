import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface IGuest {
  adult: number;
  child: number;
  room: number;
}
export interface IDate {
  from: number | undefined;
  to: number | undefined;
}
export interface IProvinceObject {
  province: string;
  id: string;
  cover: string;
}

interface IinitailState {
  place: { name: string } | null;

  guest: IGuest;
  selectedRange: {
    from: string | null;
    to: string | null;
  };
}
const today = new Date();
const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
const initialState: IinitailState = {
  place: null,
  guest: {
    adult: 1,
    child: 0,
    room: 1,
  },
  selectedRange: {
    from: today.toISOString(),
    to: tomorrow.toISOString(),
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    incrementGuest(state, action: PayloadAction<string>) {
      if (action.payload === "adult") state.guest.adult += 1;
      if (action.payload === "child") state.guest.child += 1;
      if (action.payload === "room") {
        if (state.guest.room >= state.guest.adult) {
          state.guest.adult += 1;
          state.guest.room += 1;
        } else {
          state.guest.room += 1;
        }
      }
    },
    decrementGuest(state, action: PayloadAction<string>) {
      if (action.payload === "adult") state.guest.adult -= 1;
      if (action.payload === "child") state.guest.child -= 1;
      if (action.payload === "room") state.guest.room -= 1;
    },

    setSelectedRange(
      state,
      action: PayloadAction<{
        from: string | null;
        to: string | null;
      }>
    ) {
      state.selectedRange = action.payload;
    },

    selectPlace(state, action: PayloadAction<{ name: string } | null>) {
      state.place = action.payload;
    },
  },
});

export const { incrementGuest, decrementGuest, setSelectedRange, selectPlace } =
  searchSlice.actions;
export default searchSlice.reducer;
