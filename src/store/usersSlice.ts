import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAllUsers } from "../api/endPoints";
import { User } from "../utils/types";

interface UsersState {
  users: Record<number, string>;
  loadingStatus: "loading" | "success" | "failed";
}

const initialState: UsersState = {
  users: {},
  loadingStatus: "loading",
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users =  await getAllUsers();
      return users.reduce((acc: UsersState["users"], item: User) => {
        acc[item.id] = item.name;
        return acc;
      }, {});

    } catch {
      return rejectWithValue("An unknown error occurred");
    }
  }
);
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loadingStatus = "loading";
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<UsersState["users"]>) => {
        state.loadingStatus = "success";
        state.users = action.payload;
      }
    );
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loadingStatus = "failed";
      state.users = [];
    });
  },
});

export default usersSlice.reducer;
