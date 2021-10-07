import loginReducer from "../Pages/Login/loginSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  isLogin: loginReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
