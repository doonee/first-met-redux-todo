import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
    
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddlewares = getDefaultMiddleware();
    return [...defaultMiddlewares];
  },
});

export default store;
