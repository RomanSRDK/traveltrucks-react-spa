import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    vehicleEquipment: "",
    vehicleType: "",
  },
});

export default filtersSlice.reducer;
