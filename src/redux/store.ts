import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import commentReducer from "./commentSlice";

export const store = configureStore({
  reducer: {
    data: commentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
