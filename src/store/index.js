import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlices";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

console.log(store);
export { store };
