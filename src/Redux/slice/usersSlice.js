import { createSlice } from "@reduxjs/toolkit";
import UsersData from "../../Data/UsersData";

const initialState = {
  usersData: UsersData,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    removeUser: (state, action) => {
      const itemId = action.payload;
      state.usersData = state.usersData.filter((item) => item.id !== itemId);
    },
    addUser: (state, action) => {
      state.usersData = [
        ...state.usersData,
        {
          id: Math.floor(Math.random() * 9999),
          fullName: action.payload.values.name,
          phoneNumber: action.payload.values.phoneNumber,
          email: action.payload.values.email,
          status: action.payload.statusValue,
        },
      ];
    },
    editUser: (state, action) => {
      console.log(action.payload);
      state.usersData = state.usersData.map((user) => {
        if (user.id === action.payload.id) {
          return {
            id: action.payload.id,
            fullName: action.payload.values.name,
            phoneNumber: action.payload.values.phoneNumber,
            email: action.payload.values.email,
            status: action.payload.statusValue,
          };
        }
        return user;
      });
    },
  },
});

export const { removeUser, addUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;
