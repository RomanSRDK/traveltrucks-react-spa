import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getAllCampers = createAsyncThunk(
  "campers/getAll",
  async (_, ThunkAPI) => {
    try {
      const { data } = await axios.get("campers");
      return data.items;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "campers/getById",
  async (id, ThunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);
