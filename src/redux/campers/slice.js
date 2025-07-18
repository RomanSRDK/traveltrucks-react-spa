import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers, getCamperById } from "./operations";

export const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getAllCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.items = action.payload;
        state.items.push(action.payload);
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
