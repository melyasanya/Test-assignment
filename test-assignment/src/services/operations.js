import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const axiosLink = axios.create({
  baseURL: "https://64a03dc6ed3c41bdd7a720f2.mockapi.io",
  params: {
    limit: 3,
    page: 1,
  },
});

const axiosLinkWithoutParams = axios.create({
  baseURL: "https://64a03dc6ed3c41bdd7a720f2.mockapi.io",
});

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkApi) => {
    try {
      const response = await axiosLink.get("/users");
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const changeUser = createAsyncThunk(
  "users/changeUser",
  async ({ data, id }, thunkAPI) => {
    try {
      const response = await axiosLinkWithoutParams.put(`users/${id}`, data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUsersToFilter = createAsyncThunk(
  "users/fetchUsersToFilter",
  async (_, thunkApi) => {
    try {
      const response = await axiosLink.get("/users");
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

// export const getPaginatedUser = createAsyncThunk(
//     "users/getPaginatedUser",
//     async (_, thunkAPI) => {
//       try {
//         const response = await axiosLink.post("/users");
//         return response.data;
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     }
//   );
