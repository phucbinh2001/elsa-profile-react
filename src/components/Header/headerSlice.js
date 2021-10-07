const { createSlice } = require("@reduxjs/toolkit");

const burgerSlice = createSlice({
  name: "burgerMenu",
  initialState: false,
  reducers: {
    setStatus(state) {
      return !state;
    },
  },
});

const { actions, reducer } = burgerSlice;
export const { setStatus } = actions;
export default reducer;
