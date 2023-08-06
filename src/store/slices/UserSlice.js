import { clearAll } from "../actions";

const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: [],
  // it is reducers which accept micro reducers
  reducers: {
    addUser(state, action) {
      console.log("state", state);
      state.push(action.payload);
    },
    deleteUser(state, action) {
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
console.log(userSlice.actions); //by default actions ban jate han no need to make actions
export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;

// extra reducers woh hota ha jo ek slice mein define kia ho or apko dosre slices mein chahiya ho
// tab hum extra reducer use karte han
