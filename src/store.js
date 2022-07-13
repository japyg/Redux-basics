import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/userSlice";
import logoutReducer from "./slices/userSlice";
import changeThemeReducer from "./slices/changeThemeSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    logout: logoutReducer,
    changeTheme: changeThemeReducer,
  },
});
