import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from '@repo/types'
type StateProps = {
  loading: boolean;
  user: IUser | null;
}
const initialState: StateProps = {
  loading: false,
  user: null
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_USER: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    SET_LOADING: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});
export const { SET_USER, SET_LOADING } = userSlice.actions;
export const userReducer = userSlice.reducer;
