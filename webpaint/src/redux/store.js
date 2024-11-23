import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./redux/counterSlice";
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
