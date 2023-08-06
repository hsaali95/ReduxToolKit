import { createSlice } from "@reduxjs/toolkit";
import { clearAll } from "../actions";

const adminSlice = createSlice({
  name: "admin",
  initialState: [],
  // it is reducers which accept micro reducers
  reducers: {
    addAdmin(state, action) {
      console.log("state", state);
      state.push(action.payload);
    },
    deleteAdmin(state, action) {
      const recordId = action.payload;
      return state.filter((data) => data.id !== recordId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(clearAll, () => {
      return [];
    });
  },
});
console.log(adminSlice.actions); //by default actions ban jate han no need to make actions
export default adminSlice.reducer;
export const { addAdmin, deleteAdmin } = adminSlice.actions;

// extra reducers woh hota ha jo ek slice mein define kia ho or apko dosre slices mein chahiya ho
// tab hum extra reducer use karte han
