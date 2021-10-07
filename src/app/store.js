import loginReducer from "../Pages/Login/loginSlice";
import headerSlice from "../components/Header/headerSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  isLogin: loginReducer,
  isOpenMenu: headerSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
