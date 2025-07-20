import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    vehicleEquipment: [],
    vehicleType: "",
  },
});

export default filtersSlice.reducer;
