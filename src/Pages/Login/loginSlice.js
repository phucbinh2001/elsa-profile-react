const { createSlice } = require("@reduxjs/toolkit");

const loginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    logIn() {
      return true;
    },
    logOut() {
      return false;
    },
  },
});

const { actions, reducer } = loginSlice;
export const { logIn, logOut } = actions;
export default reducer;
