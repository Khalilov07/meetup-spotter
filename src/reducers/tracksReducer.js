import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { request } from "../utils/common";
import { tourItemCollectionQuery } from "../utils/queries";

const initialState = {
  items: [],
  isLoading: false,
};

export const getTrackItems = createAsyncThunk(
  "trackReducer/getTrackItems",
  async (_, thunkApi) => {
    try {
      const data = await request(tourItemCollectionQuery);

      const { items } = data.productCollection;

      return items;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

const trackItemsSlice = createSlice({
  name: "tracksReducer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTrackItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrackItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload; // Change this line
      })
      .addCase(getTrackItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default trackItemsSlice.reducer;
