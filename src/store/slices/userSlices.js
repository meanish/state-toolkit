import { createSlice } from "@reduxjs/toolkit";
import { removeAll } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1); //modisy array by addd or remove items syt(startpoint,countno.)
    },

    // removeAll(state, action) {
    //   return [];
    // },
  },
  //xtrareducers is a reusable slice for different slices
  //for implementation we need createAction which is in action folder
  extraReducers(builder) {
    builder.addCase(removeAll, () => {
      return [];
    });
  },
});

export { userSlice };
export const { addUsers, removeUser } = userSlice.actions;
