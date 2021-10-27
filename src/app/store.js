import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    movie: movieReducer,
  },
});
