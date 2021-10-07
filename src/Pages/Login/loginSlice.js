const { createSlice } = require("@reduxjs/toolkit");

const AccessToken = localStorage.getItem("ACCESS_TOKEN");
const haveAccess = AccessToken != null ? true : false;

const loginSlice = createSlice({
  name: "login",
  initialState: haveAccess,
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
